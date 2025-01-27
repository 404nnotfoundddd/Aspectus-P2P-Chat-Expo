import Text from '@/components/ui/Text'
import TextInput from '@/components/ui/TextInput'
import { TouchableOpacity, View } from 'react-native'
import { MotiView } from 'moti'
import SendReqBtn from './components/SendReqBtn'
import IDInput from './components/IDInput'
import NoteInput from './components/NoteInput'

interface ModalContentProps {
    onClose: () => void
}

const ModalContent = ({ onClose }: ModalContentProps) => {
    return (
        <View className='w-full h-full absolute items-center justify-center'>
            <MotiView
                className='w-[90%] max-w-[400px]'
                from={{
                    opacity: 0,
                    scale: 0.9,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                exit={{
                    opacity: 0,
                    scale: 0.9,
                }}
                transition={{
                    type: 'timing',
                    duration: 200
                }}
            >
                <View className='p-6 bg-[#2a2a2a] rounded-xl flex flex-col gap-4 shadow-lg'>
                    <View>
                        <Text className='text-white text-xl font-semibold mb-1'>
                            Send Chat Request
                        </Text>
                        <Text className='text-[#ffffff80] text-sm'>
                            Enter the user ID to send a chat request
                        </Text>
                    </View>

                    <View className='flex flex-col gap-2'>
                        <IDInput />
                        <NoteInput />
                    </View>

                    <View className='flex flex-row gap-3 justify-center'>
                        <TouchableOpacity
                            onPress={onClose}
                            className='px-4 py-2 rounded-lg bg-[#ffffff14]'
                        >
                            <Text className='text-[#ffffffcc]'>Cancel</Text>
                        </TouchableOpacity>
                        <SendReqBtn />
                    </View>
                </View>
            </MotiView>
        </View>
    )
}

export default ModalContent