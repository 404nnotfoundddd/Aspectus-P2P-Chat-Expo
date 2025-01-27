import { Slot } from 'expo-router'
import SignedIn from '@/components/SignedIn'
import VerifiedEncyrptionKey from '@/components/VerifiedEncyrptionKey'
import GenerateKeypairs from '@/components/Providers/GenerateKeypairs'
import Providers from './components/Providers'

const Layout = () => {
    return (
        <SignedIn>
            <VerifiedEncyrptionKey>
                <GenerateKeypairs>
                    <Providers>
                        <Slot />
                    </Providers>
                </GenerateKeypairs>
            </VerifiedEncyrptionKey>
        </SignedIn>
    )
}

export default Layout