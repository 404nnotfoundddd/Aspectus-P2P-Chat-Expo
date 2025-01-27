import Text from '@/components/ui/Text'
import TextInput from '@/components/ui/TextInput'
import { useSetAtom } from 'jotai'
import { View } from 'react-native'
import { encryptionKeyAtom } from '../atoms'

const EncryptionKey = () => {
    const setEncryptionKey = useSetAtom(encryptionKeyAtom)

    const onChangeText = (text: string) => {
        setEncryptionKey(text)
    }

    return (
        <View className='flex flex-col w-full gap-1'>
            <Text fontFamily='outfit600' className='text-yellow-500'>
                Encryption key (optional)
            </Text>
            <TextInput onChangeText={onChangeText} className='w-full p-2 text-[1.3rem] bg-yellow-500 rounded-md text-black/60' />
            <Text fontFamily='outfit600' className='text-yellow-500 text-sm'>
                By default, your data is encrypted using your encryption key and the AES-256 encryption algorithm, but you can encrypt your data twice if you want extra security. This process only happens on your device, not on our servers.</Text>
        </View>
    )
}

export default EncryptionKey