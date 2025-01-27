import { AES, enc } from 'react-native-crypto-js'
import { useMMKVString as defaultuseMMKVString } from 'react-native-mmkv'
import useRealEncryptionKey from './useRealEncryptionKey'

/**
 * useMMKVString is a custom hook built on top of react-native-mmkv useMMKVString hook.
 * It provides an additional feature of encryption and decryption of the value stored in MMKV.
 */
const useMMKVString = (name: string, opts?: {
    encryption?: boolean
}): [string | undefined, (value: string | ((current: string | undefined) => string | undefined) | undefined) => void] => {
    const [originalValue, originalSetValue] = defaultuseMMKVString(name)
    const encryptionKey = useRealEncryptionKey(s => s.encryptionKey)

    const decryptedValue = (() => {
        if (!encryptionKey || !originalValue || opts?.encryption === false) return originalValue

        const bytes = AES.decrypt(originalValue, encryptionKey)
        const decrypted = bytes.toString(enc.Utf8)
        return decrypted
    })()

    const setEncryptedValue = (value: string | ((current: string | undefined) => string | undefined) | undefined) => {
        // get modified value
        const modifiedValue = (() => {
            if (typeof value === 'function') return value(originalValue)
            else return value
        })()

        // if there is no need to encrypt, then set the value
        if (opts?.encryption === false) {
            originalSetValue(modifiedValue)
            return
        }

        // there is no need to encrypt if there is no encryptionKey
        if (!encryptionKey) {
            if (typeof value === 'function') originalSetValue(value(originalValue))
            else originalSetValue(value)
            return
        }

        // if value is undefined, then there is no need to encrypt
        if (!modifiedValue) {
            originalSetValue(modifiedValue)
            return
        }

        // encrypt value
        const encryptedValue = AES.encrypt(modifiedValue, encryptionKey).toString()
        originalSetValue(encryptedValue)

    }


    return [decryptedValue, setEncryptedValue]
}

export default useMMKVString