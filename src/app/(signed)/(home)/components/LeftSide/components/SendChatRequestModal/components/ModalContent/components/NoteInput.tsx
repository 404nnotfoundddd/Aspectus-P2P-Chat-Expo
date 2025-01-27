import TextInput from '@/components/ui/TextInput'
import { useAtom } from 'jotai'
import { noteInputAtom } from './atoms'

const NoteInput = () => {
    const [input, setInput] = useAtom(noteInputAtom)

    return (
        <TextInput
            className='rounded-lg bg-[#ffffff14] text-white p-3 text-[1rem]'
            placeholder='Enter note to send (optional)'
            onChangeText={(text) => setInput(text)}
            value={input}
            maxLength={500}
            multiline={true}
            placeholderTextColor="#ffffff50"
        />
    )
}

export default NoteInput