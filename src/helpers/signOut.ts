import useMMKV from '@/store/zustand/useMMKV'
import { createURL } from 'expo-linking'

export const onSignOut = () => {
    useMMKV.removeItem('user_ID')
    useMMKV.removeItem('password')
    useMMKV.removeItem('encryption_key')
    createURL('/sign-in')
}
