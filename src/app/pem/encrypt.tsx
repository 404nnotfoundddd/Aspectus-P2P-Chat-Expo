import Button from '@/components/ui/Button'
import Text from '@/components/ui/Text'
import TextInput from '@/components/ui/TextInput'
import { useState } from 'react'
import { View } from 'react-native'

const msg = 'Hello World'

const Encrypt = () => {
    const [encrypted, setEncrypted] = useState<string | null>(null)
    const [text, setText] = useState<string>('')

    const onSubmit = async () => {
    }

    return (
        <View className='flex flex-col'>
            <TextInput multiline={true} placeholder='Type your message here' className='w-full bg-[#ffffff1d] text-white placeholder:text-[#ffffff7b] outline-none p-2 rounded-t-[0.90rem] text-[1.1rem' />

            <Button onPress={onSubmit} >
                <Text>
                    Encrypt
                </Text>
            </Button>
        </View>
    )
}

export default Encrypt
