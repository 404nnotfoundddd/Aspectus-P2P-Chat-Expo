import { Slot, SplashScreen, Stack } from "expo-router"
import { useEffect } from 'react'
export { ErrorBoundary } from './components/ErrorBoundary'
import "../globals.css"
import useMyFonts from './hooks/useFonts'
import Providers from './components/Providers'
import { View } from 'react-native'

export default function RootLayout() {
  const { loaded } = useMyFonts()

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) return null
  return <View className='w-full h-full relative'>
    <Providers>
      <Slot />
    </Providers>
  </View>

}