import ScrollView from '@/components/ui/ScrollView'
import TextInput from '@/components/ui/TextInput'
import { SafeAreaView, View } from 'react-native'
import ChatRequests from './components/ChatRequests'
import LeftSide from './components/LeftSide'
import TopNav from './components/TopNav'

const Home = () => {
    return (
        <View className='bg-[#1a1a1a] w-full h-full'>
            <SafeAreaView style={{ width: '100%', height: '100%' }}>
                <ChatRequests />
                <LeftSide />
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ width: '100%', height: '100%' }} >
                    <View className='flex flex-row w-full h-full gap-4'>
                        <View className='h-full grow flex flex-col rounded-2xl'>
                            <TopNav />
                            <View className='grow'></View>
                            <TextInput multiline={true} placeholder='Type your message here' className='w-full bg-[#ffffff1d] text-white placeholder:text-[#ffffff7b] outline-none p-2 rounded-t-[0.90rem] text-[1.1rem]'></TextInput>
                        </View>
                    </View>
                </ScrollView >
            </SafeAreaView >
        </View >
    )
}

export default Home