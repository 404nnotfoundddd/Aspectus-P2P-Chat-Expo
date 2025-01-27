import { View } from 'react-native';
import { type ErrorBoundaryProps } from 'expo-router'
import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'


export const ErrorBoundary = ({ error, retry }: ErrorBoundaryProps) => {
    return (
        <View className='flex w-full h-full items-center justify-center flex-col gap-5 bg-red-500  text-white'>
            <View className='flex items-center justify-center flex-col'>
                <Text fontFamily='outfit700' className='text-center text-[2rem]'>Oops! Something went wrong.</Text>
            </View>
            <Text className='text-[1rem] w-[80%] text-center'>{error.message}</Text>

            <View className='flex flex-col gap-1 items-center'>
                <Button onPress={retry} className='text-[1rem] px-3 py-2 bg-red-600 rounded-md'>
                    <Text className='text-[1.4rem] text-white/80'>Try Again</Text>
                </Button>
            </View>
        </View>
    );
}
