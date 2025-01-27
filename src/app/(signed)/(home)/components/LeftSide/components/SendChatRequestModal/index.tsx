import Button from '@/components/ui/Button'
import Plus from '@/components/ui/svg/Plus'
import { Fragment, useState, useEffect } from 'react'
import { Modal, TouchableOpacity, View } from 'react-native'
import { AnimatePresence } from 'moti'
import ModalContent from './components/ModalContent'
import ModalOverlay from './components/ModalOverlay'

const SendChatRequestModal = () => {
    const [isOpen, setIsOpen] = useState(false)
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

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <Fragment>
            <TouchableOpacity onPress={() => setIsOpen(true)}>
                <Plus height={40} width={40} fill='#ffffffa5' />
            </TouchableOpacity>
            <Modal visible={modalVisible} transparent={true}>
                <View className='w-full h-full'>
                    <AnimatePresence onExitComplete={onAnimationComplete}>
                        {isOpen && (
                            <>
                                <ModalOverlay onClose={handleClose} />
                                <ModalContent onClose={handleClose} />
                            </>
                        )}
                    </AnimatePresence>
                </View>
            </Modal>
        </Fragment>
    )
}

export default SendChatRequestModal