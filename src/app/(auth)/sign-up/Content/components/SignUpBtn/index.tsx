import { cn } from '@/utils'
import useSignUp from './hooks/useSignUp'
import { useAtomValue } from 'jotai'
import { encryptionKeyAtom, nicknameAtom } from '../../atoms'
import { z } from 'zod'
import { View } from 'react-native'
import Text from '@/components/ui/Text'
import SubmitButton from '@/components/ui/auth/SubmitButton'
import useDisplayingErrors from '@/hooks/useDisplayingErrors'

const SignUpBtn = () => {
    const nicknameInput = useAtomValue(nicknameAtom)
    const encryptionKeyInput = useAtomValue(encryptionKeyAtom)
    const { error, isPending, isSuccess, signUp } = useSignUp()

    const onSubmit = () => {
        try {
            const nickname = z.string().min(1).max(20).parse(nicknameInput)
            const encryptionKey = z.string().min(1).max(20).parse(encryptionKeyInput)

            signUp({ nickname, encryptionKey })
        } catch (error) {
            useDisplayingErrors.getState().add('dsapdjas')
        }
    }

    const isButtonDisabled = !nicknameInput || !encryptionKeyInput || isPending

    return (
        <View className='flex flex-col gap-1 w-full items-center'>
            <SubmitButton isSuccess={isSuccess} isLoading={isPending} disabled={isButtonDisabled} onSubmit={onSubmit} text='Sign in' className={cn(undefined, {
                'opacity-50': isButtonDisabled
            })} />

            {error && <Text className='text-red-300 web:w-full'>{`Error: ${error.message} \n\nPlease contact us if problem persists.`}</Text>}
        </View>
    )
}

export default SignUpBtn