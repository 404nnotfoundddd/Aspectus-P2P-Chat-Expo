import { env } from '@/env'
import useMMKV from '@/store/zustand/useMMKV'
import { useMutation } from '@tanstack/react-query'
import * as Linking from 'expo-linking'
import bcrypt from 'react-native-bcrypt'
import useRealEncryptionKey from '@/hooks/useRealEncryptionKey'

type MutationFnArgs = { nickname: string | null, encryptionKey: string, password: string, userID: string }
type SignInArgs = { password: string, encryptionKey: string, nickname: string | null, userID: string }
type SignInResponse = {
    userID: string
    password: string
    nickname: string | null
    encryptionKey: string
}

const signIn = async ({ password, encryptionKey, nickname, userID }: SignInArgs): Promise<SignInResponse> => {
    const res = await fetch(`${env.EXPO_PUBLIC_FASTIFY_ORIGIN}/sign-in`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            secretID: password,
            userID
        }),
    })

    const body = await res.json()
    if (body === 'success') return {
        password,
        nickname,
        userID,
        encryptionKey,
    }

    throw new Error('Something went wrong')
}

const useSignIn = () => {
    const { isSuccess, data, error, isPending, mutate } = useMutation({
        mutationKey: ['sign-in'],
        mutationFn: ({ encryptionKey, nickname, password, userID }: MutationFnArgs) => signIn({ encryptionKey, nickname, password, userID }),
        onSuccess: (data) => {
            if (!data) return
            const { userID, password, nickname, encryptionKey } = data

            const salt = bcrypt.genSaltSync(10)
            const encryptionKeyHash = bcrypt.hashSync(encryptionKey, salt).toString()

            useMMKV.setItem('encryption_key', encryptionKeyHash, { encrypt: false })
            useRealEncryptionKey.getState().setKey(encryptionKey)

            useMMKV.setItem('password', password)
            useMMKV.setItem('encryption_key', encryptionKey)
            useMMKV.setItem('nickname', nickname ?? 'coolperson67')
            useMMKV.setItem('user_ID', userID)
            Linking.createURL('/')
        }
    })


    return { isSuccess, data, error, isPending, signIn: mutate }
}

export default useSignIn