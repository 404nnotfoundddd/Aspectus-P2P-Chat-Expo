import { View } from 'react-native'
import Text from './ui/Text'
import { Link } from 'expo-router'

const Footer = () => {
    return (
        <View className='flex flex-row gap-1 justify-center items-center w-full bg-[#212121] p-10'>
            <Text fontFamily='outfit500' className='text-white'>Made with ❤️ by</Text>
            <Link href='https://404portfolio.vercel.app' className='text-white'>
                <Text className='text-[#ff21e5b0] underline'>404</Text>
            </Link>
        </View>
    )
}

export default Footer