import Button from '@/components/ui/Button'
import Plus from '@/components/ui/svg/Plus'
import Settings from '@/components/ui/svg/Settings'
import WhiteIcon from '@/components/ui/svg/WhiteIcon'
import Text from '@/components/ui/Text'
import { Link } from 'expo-router'
import { useAtomValue, useSetAtom } from 'jotai'
import { Modal, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { isLeftSideOpenAtom } from '../../atoms'
import { MotiView, AnimatePresence } from 'moti'
import CloseBtn from './components/CloseBtn'
import { useState, useEffect } from 'react'
import SendChatRequestModal from './components/SendChatRequestModal'

const LeftSide = () => {
    const isOpen = useAtomValue(isLeftSideOpenAtom)
    const setIsOpen = useSetAtom(isLeftSideOpenAtom)
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setModalVisible(true)
        }
    }, [isOpen])

    const onAnimationComplete = () => {
        if (!isOpen) {
            setModalVisible(false)
        }
    }

    const handleBackgroundPress = () => {
        setIsOpen(false)
    }

    return <Modal visible={modalVisible} transparent={true}>
        <View className='w-full h-full'>
            <AnimatePresence onExitComplete={onAnimationComplete}>
                {isOpen && (
                    <>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={handleBackgroundPress}
                            className='w-full h-full'
                        >
                            <MotiView
                                className='w-full h-full absolute'
                                from={{ backgroundColor: 'rgba(0,0,0,0)' }}
                                animate={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
                                exit={{ backgroundColor: 'rgba(0,0,0,0)' }}
                                transition={{
                                    type: 'timing',
                                    duration: 200
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableWithoutFeedback>
                            <MotiView
                                className='h-full z-10 absolute bg-[#2e2e2e] flex flex-col rounded-r-2xl w-[15rem]'
                                from={{
                                    translateX: -240
                                }}
                                animate={{
                                    translateX: 0
                                }}
                                exit={{
                                    translateX: -240
                                }}
                                transition={{
                                    type: 'timing',
                                    duration: 200
                                }}>

                                <View className='p-4 flex flex-row justify-between'>
                                    <WhiteIcon height={40} width={40} />
                                    <View className='flex flex-row gap-2'>
                                        <SendChatRequestModal />
                                        <CloseBtn />
                                    </View>
                                </View>
                                <View className='grow flex flex-col gap-2 p-4'>
                                    {['Ayşe', 'Jack', 'Tunç'].map((item) => (
                                        <Button className='flex flex-row gap-2 items-center hover:bg-[#ffffff23] p-2 rounded-lg' key={item}>
                                            <Text className='text-[#ffffffa8] text-[1.2rem]'>{item}</Text>
                                        </Button>
                                    ))}
                                </View>
                                <Link href={'/account'} className='w-full border-t-[0.2rem] border-[#ffffff11] flex items-end flex-col p-2 '>
                                    <Settings className='opacity-60 hover:opacity-100 cursor-pointer' width={30} height={30} />
                                </Link>
                            </MotiView>
                        </TouchableWithoutFeedback>
                    </>
                )}
            </AnimatePresence>
        </View>
    </Modal>
}

export default LeftSide