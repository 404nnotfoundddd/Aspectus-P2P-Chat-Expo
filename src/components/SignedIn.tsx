import { Redirect } from 'expo-router'
import type { PropsWithChildren } from 'react'
import { useMMKVString } from 'react-native-mmkv'

const SignedIn = ({ children }: PropsWithChildren) => {
    const [password,] = useMMKVString('password')

    console.log('password', password)

    if (password) return children
    return <Redirect href='/(auth)/sign-in' />
}

export default SignedIn