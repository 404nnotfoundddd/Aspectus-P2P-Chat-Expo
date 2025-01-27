
export const generateKeypairsWeb = async () => {
    const keys = await crypto.subtle.generateKey(
        {
            name: "RSA-OAEP",
            modulusLength: 5096,
            publicExponent: new Uint8Array([1, 0, 1]),
            hash: "SHA-256"
        },
        true,
        ["encrypt", "decrypt"]
    )

    const publicKey = await crypto.subtle.exportKey("jwk", keys.publicKey)
    const privateKey = await crypto.subtle.exportKey("jwk", keys.privateKey)

    return { publicKey, privateKey }
}
