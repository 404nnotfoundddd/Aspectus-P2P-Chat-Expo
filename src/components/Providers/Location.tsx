import { useState, useEffect, type PropsWithChildren } from 'react'
import { View } from 'react-native'
import { useLocation } from '@/store/zustand'
import { Text } from '../ui'
import * as Location from 'expo-location'

const LocationProvider = ({ children }: PropsWithChildren) => {
    const location = useLocation(s => s.location)
    const setLocation = useLocation(s => s.set)
    const [errorMsg, setErrorMsg] = useState<string | null>(null)

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied')
                return
            }

            setLocation(await Location.getCurrentPositionAsync({}))
        })()
    }, [])


    if (errorMsg) return (
        <View className='bg-red-500 w-full h-full'>
            <Text>You need to allow location access to use this feature.</Text>
            <Text>{`Error: ${errorMsg}`}</Text>
        </View>
    )

    if (!location) return <View className='bg-red-500 flex items-center justify-center w-full h-full p-3' >
        <Text className='text-center'>You need to allow location access to use this feature.</Text>
    </View >
    return children
}

export default LocationProvider
