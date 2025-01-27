import TextInput from '@/components/ui/TextInput'
import { useSetAtom } from 'jotai'
import { encryptionKeyAtom } from '../atoms'
import { z } from 'zod'

const MAX_LENGTH = 60

const EncryptionKeyInput = () => {
    const setEncryptionKey = useSetAtom(encryptionKeyAtom)

    const onKeyChange = (Key: string) => {
        try {
            const parsedKey = z.string().min(1).max(MAX_LENGTH).trim().parse(Key)
            setEncryptionKey(parsedKey)
        } catch (error) {
            setEncryptionKey(null)
        }
    }

    return (
        <TextInput maxLength={MAX_LENGTH} spellCheck={false} onChangeText={onKeyChange} placeholder='Encryption Key' className='w-full min-[320px]:w-[19rem] min-[350px]:w-[21rem] min-[370px]:w-[22rem] min-[390px]:w-[23rem] min-[410px]:w-[24rem] bg-white rounded-lg p-2 text-[1.3rem] placeholder:text-[#0000007f]' />
    )
}

export default EncryptionKeyInput