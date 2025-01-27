import { AES, enc } from 'react-native-crypto-js'

export const getDecryptedData = (encrypted: string, encryptionKey1: string, encryptionKey2: string | null) => {
    const decrypted2 = encryptionKey2 ? AES.decrypt(encrypted, encryptionKey2).toString(enc.Utf8) : null

    const target = decrypted2 ? decrypted2 : encrypted
    const decrypted = AES.decrypt(target, encryptionKey1).toString(enc.Utf8)

    return decrypted
}