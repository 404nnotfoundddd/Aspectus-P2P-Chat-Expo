import NotVerifiedEncyrptionKey from '@/components/NotVerifiedEncyrptionKey'
import SignedIn from '@/components/SignedIn'
import { Slot } from 'expo-router'

const Layout = () => {
    return (
        <SignedIn>
            <NotVerifiedEncyrptionKey>
                <Slot />
            </NotVerifiedEncyrptionKey>
        </SignedIn>
    )
}

export default Layout