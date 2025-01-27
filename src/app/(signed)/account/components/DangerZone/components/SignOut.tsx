import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import { onSignOut } from '@/helpers'

const SignOut = () => {
    return (
        <Button onPress={onSignOut} className='p-2 bg-red-500 rounded-lg'>
            <Text fontFamily='outfit600' className='text-white text-[1.2rem] text-center'>Sign out</Text>
        </Button>
    )
}

export default SignOut