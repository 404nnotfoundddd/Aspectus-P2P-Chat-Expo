import Text from '@/components/ui/Text'
import TextInput from '@/components/ui/TextInput'
import { useSetAtom } from 'jotai'
import { View } from 'react-native'
import { encryptionKeyAtom } from '../atoms'

const EncryptionKey = () => {
    const setEncryptionKey = useSetAtom(encryptionKeyAtom)

    const setText = (text: string) => {
        setEncryptionKey(text)
    }

    return (
        <View className='flex flex-col w-full gap-1'>
            <Text fontFamily='outfit600' className='text-yellow-500'>
                Encryption Key
            </Text>
            <TextInput onChangeText={setText} className='w-full p-2 text-[1.3rem] bg-yellow-500 rounded-md text-black/60' />
            <Text fontFamily='outfit600' className='text-yellow-500 text-sm'>
                You must enter your encryption key associated with data. Your data will be broken if you enter the wrong key.
            </Text>
        </View>
    )
}

export default EncryptionKey