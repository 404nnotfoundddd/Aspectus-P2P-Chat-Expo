import { Platform } from 'react-native'
import { useAtomValue } from 'jotai'
import { encryptionKey2Atom } from '../../../../atoms'
import { useState } from 'react'
import { importBackupData } from './funcs'
import type { BackupFile } from '@/types'
import superjson from 'superjson'
import { getDecryptedData } from './funcs/getDecryptedData'
import { z } from 'zod'

let getBackupFile: null | (() => string) | (() => Promise<string>)

const useImport = ({ encryptionKeyInput }: Props) => {
    const [error, setError] = useState<boolean>(false)
    const [isSuccess, setIsSuccess] = useState<boolean>(false)
    const encryptionKey2Input = useAtomValue(encryptionKey2Atom)

    const importFile = async () => {
        try {
            if (!getBackupFile) Platform.OS === 'web'
                ? getBackupFile = (await import('@/utils')).getBackupFileWeb
                : getBackupFile = (await import('@/utils')).getBackupFile

            const encryptionKey = z.string().max(70).parse(encryptionKeyInput)
            const encryptionKey2 = z.string().max(70).nullable().parse(encryptionKey2Input)

            const encryptedData = await getBackupFile!()
            console.log({ encryptedData })
            const decyrpted = getDecryptedData(encryptedData, encryptionKey, encryptionKey2)
            console.log({ decyrpted })

            const decryptedJSON = superjson.parse(decyrpted) as BackupFile

            console.log(decryptedJSON)
            importBackupData(decryptedJSON)
            setIsSuccess(true)
        } catch (error) {
            console.error(error)
            if (error instanceof Error) setError(true)
        }
    }

    return {
        importFile,
        error,
        isSuccess
    }
}

type Props = {
    encryptionKeyInput: string | null
}

export default useImport