import { useSetAtom } from 'jotai'
import { z } from 'zod'
import { userIDAtom } from '../atoms'
import TextInput from '@/components/ui/TextInput'

const MAX_LENGTH = 30

const IDInput = () => {
    const setID = useSetAtom(userIDAtom)

    const onChangeText = (text: string) => {
        try {
            const parsedID = z.string().min(20).cuid2().max(MAX_LENGTH).parse(text)
            setID(parsedID)
        } catch (error) {
            setID(null)
        }
    }


    return (
        <TextInput maxLength={MAX_LENGTH} onChangeText={onChangeText} placeholder='Your ID' className='min-[320px]:w-[19rem] min-[350px]:w-[21rem] min-[370px]:w-[22rem] min-[390px]:w-[23rem] min-[410px]:w-[24rem] bg-white rounded-lg p-2 text-[1.3rem] placeholder:text-[#0000007f]' />
    )
}

export default IDInput