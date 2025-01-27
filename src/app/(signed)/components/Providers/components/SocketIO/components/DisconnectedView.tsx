import { View } from 'react-native'
import TryAgainBtn from './TryAgainBtn'
import Text from '@/components/ui/Text'

type DisconnectedViewProps = {
    errors: string[]
}

const DisconnectedView = ({ errors }: DisconnectedViewProps) => (
    <View className='animate-fade selection:!bg-rose-600 bg-gradient-to-tr from-rose-500 to-rose-600 flex h-full w-full flex-col items-center justify-center gap-6 rounded-lg text-white'>
        <Text fontFamily='outfit800' className='text-[2rem] text-center'>Disconnected from signaling server</Text>
        <View className='flex flex-col gap-1 items-center'>
            <Text>{`ERROR CODES: ${errors.join(' | ') || 'REASON UNKNOWN'}`}</Text>
            <View className="flex flex-row gap-4 pt-3">
                <TryAgainBtn />
            </View>
        </View>
    </View>
)

export default DisconnectedView