import Button from '@/components/ui/Button'
import Text from '@/components/ui/Text'
import { MotiView } from 'moti'
import { Modal as RNModal, View } from 'react-native'
import Import from './components/Import'
import EncryptionKey2 from './components/EncryptionKey2'
import EncryptionKey from './components/EncryptionKey'
import { useSetAtom } from 'jotai'
import { encryptionKey2Atom, encryptionKeyAtom } from './atoms'
import ScrollView from '@/components/ui/ScrollView'


const Modal = ({ visible, close }: Props) => {
    const setEncryptionKey = useSetAtom(encryptionKeyAtom)
    const setEncryptionKey2 = useSetAtom(encryptionKey2Atom)

    return <RNModal visible={visible} transparent={true} >
        <View
            className='flex flex-col w-full h-full bg-[#00000077] gap-4 items-center justify-center  px-4 py-20'>
            <ScrollView>
                <MotiView from={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className='shadow-[0_0px_10px_1px_rgba(0,0,0,0.5)] bg-[#efefef] p-4 md:w-[40rem] xxs:w-[90%] rounded-lg flex flex-col gap-10 items-center justify-center'>
                    <View className='flex flex-col items-center gap-2'>
                        <Text fontFamily='outfit800' className='text-red-500 text-[2rem]'>Import data</Text>
                        <Text fontFamily='outfit500' className='text-red-500 text-sm'>Warning: You are importing a data that will change all your current local data, including your personal information and messages. This change is permanent and cannot be undone. Make sure you have a backup of your data before importing.</Text>
                    </View>

                    <View className='flex flex-col gap-3'>
                        <EncryptionKey />
                        <EncryptionKey2 />
                    </View>

                    <View className='flex flex-row items-end gap-4 pt-10'>
                        <Button onPress={() => {
                            setEncryptionKey(null)
                            setEncryptionKey2(null)
                            close()
                        }} className='border-red-500 border-[3px] rounded-lg p-2 flex items-center justify-center'>
                            <Text fontFamily='outfit700' className='text-red-500 '>Go back</Text>
                        </Button>
                        <Import />
                    </View>
                </MotiView>

            </ScrollView>
        </View>
    </RNModal >
}

type Props = {
    visible: boolean
    close: () => void
}

export default Modal