import Text from '@/components/ui/Text'
import TextInput from '@/components/ui/TextInput'
import useMMKVString from '@/hooks/useMMKVString'
import { View } from 'react-native'

const Nickname = () => {
    const [nickname, setNickname] = useMMKVString('nickname')

    console.log({
        nickname,
    })

    const onChangeText = (text: string) => {
        if (text.length === 0) setNickname('coolperson34')
        else setNickname(text)
    }

    return (
        <View className='flex flex-col gap-1 w-full'>
            <Text>
                Nickname:
            </Text>
            <TextInput onChangeText={onChangeText} maxLength={15} fontFamily='outfit800' className='text-white text-[2rem] w-full' defaultValue={nickname}></TextInput>
        </View>
    )
}
export default Nickname