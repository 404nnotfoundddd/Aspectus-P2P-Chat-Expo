import SignedOut from '@/components/SignedOut'
import { Slot } from 'expo-router'

const AuthRoutesLayout = () => {
    return <SignedOut>
        <Slot />
    </SignedOut>
}

export default AuthRoutesLayout