import TextInput from '@/components/ui/TextInput'
import { useAtom } from 'jotai'
import { z } from 'zod'
import { encryptionKeyAtom } from './atoms'
import { useRef } from 'react'
import type { TextInput as RNTextInput } from 'react-native'

const MAX_LENGTH = 70

const KeyInput = () => {
    const [key, setKey] = useAtom(encryptionKeyAtom)
    const inputRef = useRef<RNTextInput | null>(null)

    const onChangeText = (text: string) => {
        try {
            z.string().min(1).max(MAX_LENGTH).parse(text)
            setKey(text)
        } catch (error) {
            setKey(null)
        }
    }

    return (
        <TextInput
            ref={inputRef}
            maxLength={MAX_LENGTH}
            spellCheck={false}
            onChangeText={onChangeText}
            value={key || ''}
            placeholder='Encryption key'
            className='w-full bg-white flex-1 rounded-lg p-2 text-[1.3rem] placeholder:text-[#0000007f]'
        />
    )
}

export default KeyInput