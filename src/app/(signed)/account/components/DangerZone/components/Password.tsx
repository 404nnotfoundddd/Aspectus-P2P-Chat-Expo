import SecretText from '@/components/ui/SecretText'
import Text from '@/components/ui/Text'
import useMMKVString from '@/hooks/useMMKVString'
import { View } from 'react-native'

const Password = () => {
    const [password,] = useMMKVString('password')

    return (
        <View className='flex flex-col gap-3 w-full'>

            <View className='flex flex-col gap-1'>
                <Text fontFamily='outfit700' className='text-[1.6rem] '>Password</Text>
                <Text fontFamily='outfit400' className='text-[1rem]'>This is your password to sign in your acccount. Store it in a safe place.</Text>

            </View>
            <SecretText className='web:w-full'>
                {password!}
            </SecretText>
        </View>
    )
}

export default Password