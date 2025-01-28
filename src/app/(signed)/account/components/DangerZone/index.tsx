import { View } from 'react-native'
import SignOut from './components/SignOut'
import Export from './components/Export'
import Password from './components/Password'
import Import from './components/Import'
import EncryptionKey from './components/EncryptionKey'

const DangerZone = () => {
    return (
        <View className='flex flex-col drop-shadow-[0_0px_10px_#ff0000b4] rounded-lg w-full gap-10'>
            <View className='flex flex-col gap-14 w-full items-start'>
                <Password />
                <EncryptionKey />
                <View className='flex flex-row flex-wrap gap-4 items-start'>
                    <Export />
                    <Import />
                    <SignOut />
                </View>
            </View>
        </View>
    )
}

export default DangerZone