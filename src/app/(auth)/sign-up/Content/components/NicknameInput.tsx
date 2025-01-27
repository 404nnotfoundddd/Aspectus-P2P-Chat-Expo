import TextInput from '@/components/ui/TextInput'
import { useSetAtom } from 'jotai'
import { z } from 'zod'
import { nicknameAtom } from '../atoms'

const MAX_LENGTH = 20

const NicknameInput = () => {
    const setNickname = useSetAtom(nicknameAtom)

    const onNicknameChange = (nickname: string) => {
        try {
            z.string().min(1).max(MAX_LENGTH).parse(nickname)
            setNickname(nickname)
            console.log('nickname', nickname)
        } catch (error) {
            setNickname(null)
        }
    }

    return (
        <TextInput maxLength={MAX_LENGTH} spellCheck={false} onChangeText={onNicknameChange} placeholder='Nickname' className='w-full bg-white rounded-lg p-2 min-[320px]:w-[19rem] min-[350px]:w-[21rem] min-[370px]:w-[22rem] min-[390px]:w-[23rem] min-[410px]:w-[24rem] text-[1.3rem] placeholder:text-[#0000007f]' />
    )
}

export default NicknameInput