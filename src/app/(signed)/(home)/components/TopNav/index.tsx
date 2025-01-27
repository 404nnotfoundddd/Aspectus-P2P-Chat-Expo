import PhoneCalling from '@/components/ui/svg/PhoneCalling'
import { View } from 'react-native'
import MenuBtn from './components/Menu'

const TopNav = () => {
    return (
        <View className='bg-[#2a2a2a] flex flex-row justify-between items-center px-2 w-full h-[3rem]'>
            <MenuBtn />
            <PhoneCalling className='opacity-50' width={35} height={35} />
        </View>
    )
}
export default TopNav