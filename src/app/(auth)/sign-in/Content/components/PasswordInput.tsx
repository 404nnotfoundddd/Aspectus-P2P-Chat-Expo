import { useSetAtom } from 'jotai'
import { z } from 'zod'
import { passwordAtom } from '../atoms'
import TextInput from '@/components/ui/TextInput'

const MAX_LENGTH = 70

const PasswordInput = () => {
    const setPassword = useSetAtom(passwordAtom)

    const onpasswordChange = (passwordTxt: string) => {
        try {
            const password = z.string().min(1).max(MAX_LENGTH).parse(passwordTxt)
            setPassword(password)
        } catch (error) {
            setPassword(null)
        }
    }


    return (
        <TextInput maxLength={MAX_LENGTH} onChangeText={onpasswordChange} placeholder='Password ' className='min-[320px]:w-[19rem] min-[350px]:w-[21rem] min-[370px]:w-[22rem] min-[390px]:w-[23rem] min-[410px]:w-[24rem] bg-white rounded-lg p-2 text-[1.3rem] placeholder:text-[#0000007f]' />
    )
}

export default PasswordInput