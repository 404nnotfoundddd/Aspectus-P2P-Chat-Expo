import Spinner from '@/components/ui/Spinner';
import Text from '@/components/ui/Text';
import { View } from 'react-native';

const LoadingView = () => (
    <View className="gap-3 bg-[#5100ff] items-center justify-center flex h-full w-full flex-col">
        <Text className='text-white '>Connecting to signaling server...</Text>
        <Spinner />
    </View>
)

export default LoadingView