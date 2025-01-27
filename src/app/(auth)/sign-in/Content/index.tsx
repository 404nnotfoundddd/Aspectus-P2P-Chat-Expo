import { TouchableOpacity, View } from 'react-native'
import { Fragment } from 'react'
import Text from '@/components/ui/Text'
import { Link } from 'expo-router'
import SignInButton from './components/SignInButton'
import EncryptionKeyInput from './components/EncryptionKey'
import PasswordInput from './components/PasswordInput'
import NicknameInput from './components/NicknameInput'
import IDInput from './components/IDInput'

const Content = () => {
    return (
        <Fragment>
            <View className='flex flex-col gap-7 md:w-[25rem] xxs:w-[90%] items-center'>
                <View className='flex flex-col w-full gap-2 items-center'>
                    <IDInput />
                    <PasswordInput />
                    <EncryptionKeyInput />
                    <NicknameInput />

                </View>

                <SignInButton />
            </View>
            <TouchableOpacity>
                <Link href='/(auth)/sign-up'>
                    <Text className='text-center text-[1.2rem] text-[#ffffff] underline'>
                        Don't have an account?
                    </Text>
                </Link>
            </TouchableOpacity>
        </Fragment>
    )
}

export default Content