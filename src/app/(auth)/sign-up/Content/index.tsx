import { TouchableOpacity, View } from 'react-native'
import { Fragment } from 'react'
import Text from '@/components/ui/Text'
import { Link } from 'expo-router'
import SignUpBtn from './components/SignUpBtn'
import EncryptionKeyInput from './components/EncryptionKeyInput'
import NicknameInput from './components/NicknameInput'

const Content = () => {
    return (
        <Fragment>
            <View className='flex flex-col gap-3 md:w-[25rem] xxs:w-[90%] items-center'>
                <View className='flex flex-col gap-7 items-center w-full '>
                    <View className='flex flex-col items-center gap-2'>
                        <NicknameInput />
                        <View className='flex flex-col items-center gap-1'>
                            <EncryptionKeyInput />
                            <Text className='min-[320px]:w-[19rem] min-[350px]:w-[21rem] min-[370px]:w-[22rem] min-[390px]:w-[23rem] min-[410px]:w-[24rem] text-sm'>The encryption key is used to encrypt all your local data. Store it in a safe place.</Text>
                        </View>
                    </View>

                    <SignUpBtn />
                </View>
            </View >
            <Link href='/(auth)/sign-in'>
                <TouchableOpacity>
                    <Text className='text-center text-[1.2rem] text-[#ffffff] underline'>
                        Already have an account?
                    </Text>
                </TouchableOpacity>
            </Link>
        </Fragment>
    )
}

export default Content