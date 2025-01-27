
import Page from '@/components/ui/auth/Page'
import KeyInput from './components/KeyInput'
import Submit from './components/Submit'
import { View } from 'react-native'

const LockScreen = () => {
    return <Page title='Enter key' description={`You need to enter encryption key to continue. Encryption key is used to encrypt your data.`}>
        <View className='flex flex-col gap-5 md:w-[25rem] xxs:w-[90%] items-center pb-20'>
            <KeyInput />
            <Submit />
        </View>
    </Page>
}

export default LockScreen