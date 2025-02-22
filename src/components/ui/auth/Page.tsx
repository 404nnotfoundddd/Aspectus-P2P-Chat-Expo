import { SafeAreaView, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import type { PropsWithChildren } from 'react'
import ScrollView from '@/components/ui/ScrollView'
import Text from '@/components/ui/Text'
import WhiteIcon from '../svg/WhiteIcon'


const Page = ({ title, description, children }: Props) => {
    return (
        <LinearGradient colors={['#5000f9', '#316cff']} className='w-full h-full'>

            <SafeAreaView>
                <ScrollView>
                    <View className='w-full h-full flex flex-col gap-10 pb-10 items-center'>
                        <View className='flex flex-col gap-5 items-center pt-9 w-[90%]'>
                            <WhiteIcon height={100} width={100} />
                            <View className='flex flex-col gap-1 drop-shadow-lg items-center w-[90%]'>
                                <Text fontFamily='outfit700' className='text-[#ffffff]  w-full text-center text-[3rem]'>
                                    {title}
                                </Text>
                                <Text fontFamily='outfit500' className='text-[#ffffff] text-center max-w-[20rem] text-[1rem]'>
                                    {description}
                                </Text>
                            </View>
                        </View>
                        <View className='flex items-center gap-4 flex-col w-[90%]'>
                            {children}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>

    )
}

export default Page

type Props = PropsWithChildren<{
    title: string
    description: string
}>