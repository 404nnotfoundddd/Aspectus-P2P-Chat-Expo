import { SafeAreaView, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import DangerZone from './components/DangerZone'
import ScrollView from '@/components/ui/ScrollView'
import Nickname from './components/Nickname'
import UserInfo from './components/UserInfo'
import About from './components/About'
import useMMKVString from '@/hooks/useMMKVString'
import Text from '@/components/ui/Text'

const AccountSettings = () => {
    const [ID] = useMMKVString('user_ID')

    return (
        <LinearGradient colors={['#5100ff', '#0073ff']} className='w-full h-full'>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SafeAreaView className='flex flex-col gap-10 w-full items-center pt-10'>
                    <Text fontFamily='outfit700' className='text-white text-[2rem] font-semibold'>
                        Account
                    </Text>
                    <View className='w-full h-full flex flex-col pl-3 pr-4 pb-10 pt-10 md:items-center xxs:items-start'>
                        <View className='flex flex-col gap-10 lg:w-[50rem] md:w-[40rem] xxs:w-[90%] md:items-center xxs:items-start'>
                            <View className='flex flex-col items-center w-full gap-4 '>

                                <Nickname />
                                <About />
                            </View>

                            <UserInfo ID={ID!} />

                            <DangerZone />
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </LinearGradient>
    )
}
export default AccountSettings