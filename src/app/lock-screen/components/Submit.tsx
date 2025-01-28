import SubmitButton from '@/components/ui/auth/SubmitButton'
import { useAtom } from 'jotai'
import { encryptionKeyAtom } from './atoms'
import bcrypt from 'bcryptjs'
import useRealEncryptionKey from '@/hooks/useRealEncryptionKey'
import useMMKVString from '@/hooks/useMMKVString'
import { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import Text from '@/components/ui/Text'
import { createURL } from 'expo-linking'
import { onSignOut } from '@/helpers'
import { cn } from '@/utils'
import useDisplayingErrors from '@/hooks/useDisplayingErrors'

const Submit = () => {
    const [encryptionKey, setEncryptionKey] = useAtom(encryptionKeyAtom)
    const setRealEncryptionKey = useRealEncryptionKey(s => s.setKey)
    const [encryptionKeyHash] = useMMKVString('encryption_key', { encryption: false })
    const [error, setError] = useState<string | null>(null)

    const onSubmit = async () => {
        const isSame = await bcrypt.compare(encryptionKey!, encryptionKeyHash!)

        if (isSame) {
            setRealEncryptionKey(encryptionKey!)
            createURL('/')
        }
        else {
            setEncryptionKey(null)
            useDisplayingErrors.getState().add('Wrong key')
        }

    }

    return (
        <View className='flex flex-col gap-8 w-full items-end'>
            <SubmitButton disabled={!encryptionKey} onSubmit={onSubmit} isLoading={false} isSuccess={false} text='Continue' />
            <TouchableOpacity onPress={onSignOut} style={{ cursor: 'pointer' }} className={cn(`bg-[#ff2e4ade] select-none flex flex-row p-3 gap-2 rounded-lg drop-shadow-lg`)}>
                <View className='flex flex-row gap-3 items-center justify-center'>
                    <Text fontFamily='outfit500' className='text-white'>Sign out</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default Submit