import TextInput from '@/components/ui/TextInput'
import { useAtom } from 'jotai'
import { IDInputAtom } from './atoms'

const IDInput = () => {
    const [input, setInput] = useAtom(IDInputAtom)

    return (
        <TextInput
            className='rounded-lg bg-[#ffffff14] text-white p-3 text-[1rem]'
            placeholder='Enter user ID'
            value={input}
            onChangeText={(text) => setInput(text)}
            placeholderTextColor="#ffffff50"
        />
    )
}

export default IDInput