import useKeypairs from '@/hooks/useKeypairs'
import { useEffect, type PropsWithChildren } from 'react'
import { Platform, View } from 'react-native'
import Text from '../ui/Text'
import Spinner from '../ui/Spinner'

const GenerateKeypairs = ({ children }: PropsWithChildren) => {
    const privKey = useKeypairs(s => s.privateKey)
    const pubKey = useKeypairs(s => s.publicKey)
    const setPrivKey = useKeypairs(s => s.setPrivKey)
    const setPubKey = useKeypairs(s => s.setPubKey)

    useEffect(() => {
        (async () => {
            if (Platform.OS === 'web') {
                const { privateKey, publicKey } = await (await import('@/utils')).generateKeypairsWeb()

                setPrivKey(privateKey)
                setPubKey(publicKey)
                return
            }

            const { privateKey, publicKey } = await (await import('@/utils')).generateKeypairs()

            setPrivKey(privateKey)
            setPubKey(publicKey)
        })()

    }, [])

    if (privKey && pubKey) return children

    return <View className='w-full bg-[#4e00f9] h-full flex flex-col items-center justify-center gap-4'>
        <Text className='text-white text-center'>Generating keypairs for secure communication...</Text>
        <Spinner />
    </View>

}

export default GenerateKeypairs