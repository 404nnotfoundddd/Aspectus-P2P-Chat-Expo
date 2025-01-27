import { env } from '@/env'
import useMMKV from '@/store/zustand/useMMKV'
import { useMutation } from '@tanstack/react-query'
import * as Linking from 'expo-linking'
import bcrypt from 'bcryptjs'

import useRealEncryptionKey from '@/hooks/useRealEncryptionKey'

const mutationFn = async ({ encryptionKey, nickname }: { nickname: string, encryptionKey: string }): Promise<{
    userID: string
    secretID: string
    nickname: string
    encryptionKey: string
}> => {
    const res = await fetch(`${env.EXPO_PUBLIC_FASTIFY_ORIGIN}/sign-up`, {
        method: 'POST',
    })

    const body = await res.json()
    return {
        ...body,
        nickname,
        encryptionKey,
    }
}

const useSignUp = () => {
    const { isSuccess, error, isPending, mutate } = useMutation({
        mutationKey: ['sign-up'],
        mutationFn: async ({ encryptionKey, nickname }: { nickname: string, encryptionKey: string }) => await mutationFn({ encryptionKey, nickname }),
        onSuccess: ({ secretID, userID, encryptionKey, nickname }) => {
            const salt = bcrypt.genSaltSync(10)
            const encryptionKeyHash = bcrypt.hashSync(encryptionKey, salt).toString()

            useMMKV.setItem('encryption_key', encryptionKeyHash, { encrypt: false })
            useRealEncryptionKey.getState().setKey(encryptionKey)

            useMMKV.setItem('password', secretID)
            useMMKV.setItem('user_ID', userID,)
            useMMKV.setItem('nickname', nickname)

            Linking.createURL('/')
        }
    })

    return { isSuccess, error, isPending, signUp: mutate }
}

export default useSignUp