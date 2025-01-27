import useRealEncryptionKey from '@/hooks/useRealEncryptionKey'
import { Redirect } from 'expo-router'
import type { PropsWithChildren } from 'react'

const NotVerifiedEncyrptionKey = ({ children }: PropsWithChildren) => {
    const encryptionKey = useRealEncryptionKey(s => s.encryptionKey)

    if (!encryptionKey) return children
    return <Redirect href='/(signed)/(home)' />
}

export default NotVerifiedEncyrptionKey