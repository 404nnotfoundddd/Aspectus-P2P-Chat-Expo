import { MMKV } from 'react-native-mmkv'
import { AES, enc } from 'react-native-crypto-js'
import useRealEncryptionKey from '@/hooks/useRealEncryptionKey'

const storage = new MMKV()

const useMMKV: Actions = {
    setItem: (name, value, options) => {
        const encryptionKey = useRealEncryptionKey.getState().encryptionKey

        const encryptedValue = (() => {
            if (options?.encrypt === false || !encryptionKey) return value

            return AES.encrypt(value, encryptionKey).toString()
        })()

        storage.set(name, encryptedValue)
    },

    getItem: (name, options) => {
        const value = storage.getString(name)
        if (!value) return null

        const encryptionKey = useRealEncryptionKey.getState().encryptionKey

        const decryptedValue = (() => {
            if (options?.decrypt === false || !encryptionKey) return value

            const bytes = AES.decrypt(value, encryptionKey)
            const decrypted = bytes.toString(enc.Utf8)
            return decrypted
        })()

        return decryptedValue
    },

    removeItem: (name) => storage.delete(name),
}

export default useMMKV

type Actions = {
    setItem: (name: string, value: string, options?: {
        encrypt?: boolean
    }) => void
    getItem: (name: string, options?: {
        decrypt?: boolean
    }) => string | null
    removeItem: (name: string) => void
}

