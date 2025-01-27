import SecretText from '@/components/ui/SecretText'
import Text from '@/components/ui/Text'
import useRealEncryptionKey from '@/hooks/useRealEncryptionKey'
import { View } from 'react-native'

const EncryptionKey = () => {
    const encryptionKey = useRealEncryptionKey(s => s.encryptionKey)

    return (
        <View className='flex flex-col gap-3 w-full'>

            <View className='flex flex-col gap-1'>
                <Text fontFamily='outfit700' className='text-[1.6rem] '>Encryption Key</Text>
                <Text fontFamily='outfit400' className='text-[1rem]'>This is your encryption key used to encrypt your data. We don't store your key on our servers, store it in a safe place.</Text>
            </View>
            <SecretText className='web:w-full'>
                {encryptionKey!}
            </SecretText>
        </View>
    )
}

export default EncryptionKey