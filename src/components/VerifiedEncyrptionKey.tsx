import useRealEncryptionKey from '@/hooks/useRealEncryptionKey'
import { Redirect } from 'expo-router'
import type { PropsWithChildren } from 'react'

const VerifiedEncyrptionKey = ({ children }: PropsWithChildren) => {
    const encryptionKey = useRealEncryptionKey(s => s.encryptionKey)

    if (encryptionKey) return children
    return <Redirect href='/pem' />
}

export default VerifiedEncyrptionKey