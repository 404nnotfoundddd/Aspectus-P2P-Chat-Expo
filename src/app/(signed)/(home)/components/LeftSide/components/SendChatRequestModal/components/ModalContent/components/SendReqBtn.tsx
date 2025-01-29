import Text from '@/components/ui/Text'
import { useAtom } from 'jotai'
import { TouchableOpacity } from 'react-native'
import { IDInputAtom, noteInputAtom } from './atoms'
import useSocketIO from '@/store/zustand/useSocketIO'
import useKeypairs from '@/hooks/useKeypairs'
import CheckCircle from '@/components/ui/svg/CheckCircle'
import { useEffect, useState } from 'react'
import { cn } from '@/utils'
import { sendChatReq } from '@/helpers'

const SendReqBtn = () => {
    const IO = useSocketIO(s => s.io)
    const [IDInput, setIDInput] = useAtom(IDInputAtom)
    const [noteInput, setNoteInput] = useAtom(noteInputAtom)
    const publicKey = useKeypairs(s => s.publicKey)!
    const [isSuccess, setIsSuccess] = useState<boolean>(false)

    useEffect(() => {
        if (isSuccess) {
            setTimeout(() => {
                setIsSuccess(false)
            }, 2000)
        }
    }, [isSuccess])

    const onReq = () => {

        sendChatReq(IO, {
            userID: IDInput,
            publicKey,
            note: noteInput,
        })

        setIsSuccess(true)
        setIDInput('')
        setNoteInput('')
    }

    const isDisabled = !IDInput || !publicKey || isSuccess

    return (
        <TouchableOpacity
            disabled={isDisabled}
            onPress={onReq}
            className={cn('px-4 py-2 rounded-lg flex flex-row items-center gap-2 bg-[#5100ff]', {
                'opacity-50': (!IDInput || !publicKey) && !isSuccess,
                'bg-[#17d466]': isSuccess
            })}
        >
            <Text className='text-white font-medium'>{isSuccess ? 'Sent' : 'Send Request'}</Text>
            {isSuccess && <CheckCircle width={20} height={20} />}
        </TouchableOpacity>)
}

export default SendReqBtn