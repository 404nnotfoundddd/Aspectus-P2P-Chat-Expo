import useDisplayingErrors from '@/hooks/useDisplayingErrors'
import { MotiView, AnimatePresence } from 'moti'
import { Fragment, useEffect, useState, type PropsWithChildren } from 'react'
import Text from '@/components/ui/Text'
import { Modal, View } from 'react-native'

const ErrorDisplay = ({ children }: PropsWithChildren) => {
    const [isVisible, setIsVisible] = useState(false)
    const errors = useDisplayingErrors((s) => s.error)

    useEffect(() => {
        setIsVisible(true)

        const timeout = setTimeout(() => {
            setIsVisible(false)
        }, 5000)
        return () => clearTimeout(timeout)
    }, [errors])

    const lastError = errors[errors.length - 1]

    return (
        <Fragment>
            <Modal
                transparent={true}
                visible={isVisible}
                animationType="none"
                pointerEvents="none"
            >
                <View className='w-full h-full pointer-events-none items-center flex-col justify-end'>
                    <AnimatePresence>
                        {isVisible && (
                            <MotiView
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
                                exitTransition={{
                                    type: 'timing',
                                    duration: 2500,
                                }}
                                className="bg-red-500 rounded-lg p-4 m-2 shadow-lg"
                            >
                                <Text fontFamily='outfit700'>{lastError!}</Text>
                            </MotiView>
                        )}
                    </AnimatePresence>
                </View>
            </Modal>
            {children}
        </Fragment>
    )
}

export default ErrorDisplay