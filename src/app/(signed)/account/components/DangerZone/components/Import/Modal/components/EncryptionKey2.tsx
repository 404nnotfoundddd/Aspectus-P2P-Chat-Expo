import Text from '@/components/ui/Text'
import TextInput from '@/components/ui/TextInput'
import { View } from 'react-native'
import { encryptionKey2Atom } from '../atoms'
import { useSetAtom } from 'jotai'

const EncryptionKey2 = () => {
    const setEncryptionKey = useSetAtom(encryptionKey2Atom)

    const setText = (text: string) => {
        setEncryptionKey(text)
    }

    return (
        <View className='flex flex-col w-full gap-1'>
            <Text fontFamily='outfit600' className='text-yellow-500'>
                Encryption Key 2 (optional)
            </Text>
            <TextInput onChangeText={setText} className='w-full p-2 text-[1.3rem] bg-yellow-500 rounded-md text-black/60' />
            <Text fontFamily='outfit600' className='text-yellow-500 text-sm'>
                If you used a key to encrypt your data twice, you can enter it here to import your data. If you did not use, leave this field empty. Your data will be broken if you enter the wrong key.
            </Text>
        </View>
    )
}

export default EncryptionKey2