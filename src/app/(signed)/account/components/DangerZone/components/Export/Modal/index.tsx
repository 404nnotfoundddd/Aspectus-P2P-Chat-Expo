import Button from '@/components/ui/Button'
import Text from '@/components/ui/Text'
import { MotiView, ScrollView } from 'moti'
import { Modal as RNModal, View } from 'react-native'
import Export from './components/Export'
import EncryptionKey from './components/EncryptionKey'


const Modal = ({ visible, close }: Props) => {
    return <RNModal visible={visible} transparent={true}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ width: '100%', height: '100%' }}>
            <View
                className='flex flex-col w-full h-full bg-[#00000077]  gap-4 items-center justify-center  px-4 py-20'>
                <MotiView from={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className='shadow-[0_0px_10px_1px_rgba(0,0,0,0.5)] bg-[#efefef] p-4 md:w-[40rem] xxs:w-[90%] rounded-lg flex flex-col gap-10 items-center justify-center'>
                    <View className='flex flex-col items-center gap-2'>
                        <Text fontFamily='outfit800' className='text-red-500 text-[2rem]'>Export data</Text>
                        <Text fontFamily='outfit500' className='text-red-500 text-sm'>Warning: Data includes all your local data, including your personal information, and messages. This data is encrypted using your encryption key and stored only on your device, not on our servers. You can be sure that your data is safe if you store it in a secure place.</Text>
                    </View>

                    <EncryptionKey />

                    <View className='flex flex-row gap-4 pt-10'>
                        <Button onPress={close} className='border-red-500 border-[3px] rounded-lg p-2 flex items-center justify-center'>
                            <Text fontFamily='outfit700' className='text-red-500 '>Go back</Text>
                        </Button>
                        <Export />
                    </View>
                </MotiView>

            </View>
        </ScrollView>
    </RNModal >
}

type Props = {
    visible: boolean
    close: () => void
}

export default Modal