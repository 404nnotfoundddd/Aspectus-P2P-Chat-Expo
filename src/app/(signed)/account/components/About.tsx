import Text from '@/components/ui/Text'
import TextInput from '@/components/ui/TextInput'
import useMMKVString from '@/hooks/useMMKVString'
import { View } from 'react-native'

const About = () => {
    const [about, setAbout] = useMMKVString('about')

    const onChange = (text: string) => {
        setAbout(text)
    }

    return (
        <View className='flex flex-col gap-1 w-full'>
            <Text>
                About you:
            </Text>
            <TextInput placeholder='About yourself' onChangeText={onChange} maxLength={500} fontFamily='outfit500' defaultValue={about} className='w-full p-2 rounded-lg bg-white text-black placeholder:text-black/55 text-[1rem]' multiline={true} numberOfLines={4}
            ></TextInput>
        </View>
    )
}
export default About