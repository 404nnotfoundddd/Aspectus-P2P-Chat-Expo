import { cn } from '@/utils'
import useSignIn from './hooks/useSignIn'
import { useAtomValue } from 'jotai'
import { encryptionKeyAtom, nicknameAtom, passwordAtom, userIDAtom } from '../../atoms'
import { z } from 'zod'
import { View } from 'react-native'
import Text from '@/components/ui/Text'
import SubmitButton from '@/components/ui/auth/SubmitButton'

const SignInButton = () => {
    const nicknameInput = useAtomValue(nicknameAtom)
    const encryptionKeyInput = useAtomValue(encryptionKeyAtom)
    const passwordInput = useAtomValue(passwordAtom)
    const userIDInput = useAtomValue(userIDAtom)

    const { error, isPending, isSuccess, signIn } = useSignIn()

    const onSubmit = () => {
        try {
            const nickname = z.string().trim().min(1).max(20).nullable().parse(nicknameInput)
            const encryptionKey = z.string().trim().min(1).max(20).parse(encryptionKeyInput)
            const password = z.string().trim().min(1).max(70).parse(passwordInput)
            const userID = z.string().trim().min(20).cuid2().parse(userIDInput)

            signIn({ nickname, encryptionKey, password, userID })
        } catch (error) {
            console.error(error)
        }
    }

    const isButtonDisabled = !nicknameInput || !encryptionKeyInput || !passwordInput || isPending

    return (
        <View className='flex flex-col gap-1 w-full items-center'>
            <SubmitButton isSuccess={isSuccess} isLoading={isPending} disabled={isButtonDisabled} onSubmit={onSubmit} text='Sign in' className={cn(undefined, {
                'opacity-50': isButtonDisabled
            })} />

            {error && <Text className='text-red-300 web:w-full'>{`Check your ID and password and try again.`}</Text>}
        </View>
    )
}

export default SignInButton