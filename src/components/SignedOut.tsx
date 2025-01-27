import { Redirect } from 'expo-router'
import type { PropsWithChildren } from 'react'
import { useMMKVString } from 'react-native-mmkv'

const SignedOut = ({ children }: PropsWithChildren) => {
    const [password,] = useMMKVString('password')

    if (!password) return children
    return <Redirect href='/(signed)/(home)' />
}

export default SignedOut