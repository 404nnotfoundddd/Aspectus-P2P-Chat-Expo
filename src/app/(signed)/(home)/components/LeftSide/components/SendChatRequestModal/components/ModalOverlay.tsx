import { TouchableOpacity } from 'react-native'
import { MotiView } from 'moti'

interface ModalOverlayProps {
    onClose: () => void
}

const ModalOverlay = ({ onClose }: ModalOverlayProps) => {
    return (
        <MotiView
            className='w-full h-full absolute'
            from={{ backgroundColor: 'rgba(0,0,0,0)' }}
            animate={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
            exit={{ backgroundColor: 'rgba(0,0,0,0)' }}
            transition={{
                type: 'timing',
                duration: 200
            }}
        >
            <TouchableOpacity
                activeOpacity={1}
                onPress={onClose}
                className='w-full h-full'
            />
        </MotiView>
    )
}

export default ModalOverlay