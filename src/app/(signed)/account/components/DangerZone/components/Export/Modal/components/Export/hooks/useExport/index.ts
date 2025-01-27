import useMMKV from '@/store/zustand/useMMKV'
import { Platform } from 'react-native'
import { AES } from 'react-native-crypto-js'
import { createBackupData } from './funcs'
import { useAtomValue } from 'jotai'
import { encryptionKeyAtom } from '../../../../atoms'
import { useState } from 'react'

let saveBackupFile: null | ((data: string) => void) = null

const useExport = () => {
    const [error, setError] = useState<null | string>(null)
    const encryptionKey2 = useAtomValue(encryptionKeyAtom)

    const create = async () => {
        try {
            if (!saveBackupFile) Platform.OS === 'web'
                ? saveBackupFile = (await import('@/utils')).saveBackupFileWeb
                : saveBackupFile = (await import('@/utils')).saveBackupFile

            const stringifiedJSON = createBackupData()

            const encryptionKey = useMMKV.getItem('encryption_key', { decrypt: false })
            if (!encryptionKey) throw new Error('Encryption key not found')

            const encrypted = (() => {
                const encrypted = AES.encrypt(stringifiedJSON, encryptionKey).toString()

                if (!encryptionKey2) return encrypted

                const encrypted2 = AES.encrypt(encrypted, encryptionKey2).toString()
                return encrypted2
            })()

            saveBackupFile(encrypted)
        } catch (error) {
            if (error instanceof Error) setError(error.message)
        }
    }

    return {
        create,
        error,
    }
}

export default useExport