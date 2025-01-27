import { useFonts } from 'expo-font'

const useMyFonts = () => {
    const [loaded] = useFonts({
        outfit100: require('@/assets/fonts/outfit/100.ttf'),
        outfit200: require('@/assets/fonts/outfit/200.ttf'),
        outfit300: require('@/assets/fonts/outfit/300.ttf'),
        outfit400: require('@/assets/fonts/outfit/400.ttf'),
        outfit500: require('@/assets/fonts/outfit/500.ttf'),
        outfit600: require('@/assets/fonts/outfit/600.ttf'),
        outfit700: require('@/assets/fonts/outfit/700.ttf'),
        outfit800: require('@/assets/fonts/outfit/800.ttf'),
        outfit900: require('@/assets/fonts/outfit/900.ttf'),
        geist100: require('@/assets/fonts/geist/100.ttf'),
        geist200: require('@/assets/fonts/geist/200.ttf'),
        geist300: require('@/assets/fonts/geist/300.ttf'),
        geist400: require('@/assets/fonts/geist/400.ttf'),
        geist500: require('@/assets/fonts/geist/500.ttf'),
        geist600: require('@/assets/fonts/geist/600.ttf'),
        geist700: require('@/assets/fonts/geist/700.ttf'),
        geist800: require('@/assets/fonts/geist/800.ttf'),
        geist900: require('@/assets/fonts/geist/900.ttf'),
    })

    return { loaded }
}

export default useMyFonts