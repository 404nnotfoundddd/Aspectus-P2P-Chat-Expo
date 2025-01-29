import { arrayBufToString } from './arrayToBufString'

type CryptoKeyPair = {
    publicKey: CryptoKey
    privateKey: CryptoKey
}

type PEMLabel = 'PRIVATE KEY' | 'PUBLIC KEY'
type KeyFormat = 'pkcs8' | 'spki'

type RSAOaepParams = {
    name: 'RSA-OAEP'
    modulusLength: number
    publicExponent: Uint8Array
    hash: 'SHA-256'
}

type RSAOaepEncryptParams = {
    name: 'RSA-OAEP'
}

/**
 * Converts a PEM-formatted private key back to a CryptoKey object
 * @param pemPrivateKey PEM-formatted private key string
 * @returns Promise<CryptoKey>
 */
export const revertToOriginalPrivateKey = async (pemPrivateKey: string): Promise<CryptoKey> => {
    // Remove PEM header, footer and newlines
    const pemContents = pemPrivateKey
        .replace('-----BEGIN PRIVATE KEY-----', '')
        .replace('-----END PRIVATE KEY-----', '')
        .replace(/\n/g, '');

    // Convert base64 to binary
    const binaryString = window.atob(pemContents);

    // Convert binary string to ArrayBuffer
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }

    // Import the key
    return await window.crypto.subtle.importKey(
        'pkcs8',
        bytes.buffer,
        {
            name: 'RSA-OAEP',
            hash: 'SHA-256',
        },
        true,
        ['decrypt']
    );
}

/**
 * Converts a PEM-formatted public key back to a CryptoKey object
 * @param pemPublicKey PEM-formatted public key string
 * @returns Promise<CryptoKey>
 */
export const revertToOriginalPublicKey = async (pemPublicKey: string): Promise<CryptoKey> => {
    // Remove PEM header, footer and newlines
    const pemContents = pemPublicKey
        .replace('-----BEGIN PUBLIC KEY-----', '')
        .replace('-----END PUBLIC KEY-----', '')
        .replace(/\n/g, '');

    // Convert base64 to binary
    const binaryString = window.atob(pemContents);

    // Convert binary string to ArrayBuffer
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }

    // Import the key
    return await window.crypto.subtle.importKey(
        'spki',
        bytes.buffer,
        {
            name: 'RSA-OAEP',
            hash: 'SHA-256',
        },
        true,
        ['encrypt']
    );
}


const pemEncode = (label: PEMLabel, data: string): string => {
    const base64encoded = window.btoa(data)
    const base64encodedWrapped = base64encoded.replace(/(.{64})/g, '$1\n')
    return `-----BEGIN ${label}-----\n${base64encodedWrapped}\n-----END ${label}-----`
}

const exportKeyAsString = async (
    format: KeyFormat,
    key: CryptoKey
): Promise<string> => {
    const exported = (await window.crypto.subtle.exportKey(
        format,
        key
    )) as ArrayBuffer
    return arrayBufToString(exported)
}

const generateKeyPair = async (): Promise<CryptoKeyPair> => {
    return (await window.crypto.subtle.generateKey(
        {
            name: 'RSA-OAEP',
            modulusLength: 4096,
            publicExponent: new Uint8Array([1, 0, 1]),
            hash: 'SHA-256',
        } as RSAOaepParams,
        true,
        ['encrypt', 'decrypt']
    )) as CryptoKeyPair
}




/**
 * Get the pem encoded private key from the given key pair.
 */
const pemEncodedPrivateKey = async (
    privateKey: CryptoKey
): Promise<string> => {
    const exported = await exportKeyAsString('pkcs8', privateKey)
    return pemEncode('PRIVATE KEY', exported)
}

/**
 *
 * Get the pem encoded public key from the given key pair.
 *
 */
const pemEncodedPublicKey = async (
    publicKey: CryptoKey
): Promise<string> => {
    const exported = await exportKeyAsString('spki', publicKey)
    return pemEncode('PUBLIC KEY', exported)
}

/**
 *  Encrypts a message using the given pem public key.
 * 
 * @param message message to encrypt
 * @param publicKey pem public key 
 */
export const encryptWithWebPem = async (
    message: string,
    publicKey: CryptoKey
): Promise<ArrayBuffer> => {
    const encodedMessage = new TextEncoder().encode(message)
    const arrBuffer = await window.crypto.subtle.encrypt(
        {
            name: 'RSA-OAEP',
        } as RSAOaepEncryptParams,
        publicKey,
        encodedMessage
    )

    const bytes = new Uint8Array(arrBuffer);
    const binary = bytes.reduce((str, byte) => str + String.fromCharCode(byte), '');
    console.log('base64: ', btoa(binary))

    return arrBuffer

}

/**
 * Decrypts a message using the given pem private key.
 * 
 * @param encrypted encrypted message
 * @param privateKey pem private key
 */
export const decryptWithWebPem = async (
    encrypted: ArrayBuffer,
    privateKey: CryptoKey
): Promise<string> => {
    const decrypted = await window.crypto.subtle.decrypt(
        {
            name: 'RSA-OAEP',
        } as RSAOaepEncryptParams,
        privateKey,
        encrypted
    )
    return new TextDecoder().decode(decrypted)
}

export const generatePemKeypairsWeb = async () => {
    const { privateKey, publicKey } = await generateKeyPair()
    const privateKeyPem = await pemEncodedPrivateKey(privateKey)
    const publicKeyPem = await pemEncodedPublicKey(publicKey)

    return { privateKey, publicKey, privateKeyPem, publicKeyPem }
}