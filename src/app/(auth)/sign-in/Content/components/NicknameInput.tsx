import { useSetAtom } from 'jotai'
import { z } from 'zod'
import { nicknameAtom } from '../atoms'
import TextInput from '@/components/ui/TextInput'

const MAX_LENGTH = 70

const NicknameInput = () => {
    const setNickname = useSetAtom(nicknameAtom)

    const onChangeText = (key: string) => {
        try {
            const nickname = z.string().min(1).max(MAX_LENGTH).parse(key)
            setNickname(nickname)
        } catch (error) {
            setNickname(null)
        }
    }


    return (
        <TextInput maxLength={MAX_LENGTH} onChangeText={onChangeText} placeholder='Nickname (optional)' className='wmin-[320px]:w-[19rem] min-[350px]:w-[21rem] min-[370px]:w-[22rem] min-[390px]:w-[23rem] min-[410px]:w-[24rem] bg-white rounded-lg p-2 text-[1.3rem] placeholder:text-[#0000007f]' />
    )
}

export default NicknameInput