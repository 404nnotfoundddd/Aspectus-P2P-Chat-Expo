import Button from '@/components/ui/Button'
import Text from '@/components/ui/Text'
import useExport from './hooks/useExport'
import { View } from 'react-native'

const Export = () => {
    const { create, error } = useExport()

    return (
        <View className='flex flex-col gap-2'>
            {error && <Text className='text-red-500'>{error}</Text>}
            <Button onPress={create} className='bg-red-500 rounded-lg p-2 flex items-center justify-center'>
                <Text fontFamily='outfit700' className='text-white'>Export</Text>
            </Button>
        </View>
    )
}

export default Export