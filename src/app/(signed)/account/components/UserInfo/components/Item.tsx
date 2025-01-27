import Text from '@/components/ui/Text'
import CopyBtn from '@/components/CopyBtn'
import CopyText from '@/components/ui/CopyText'
import { View } from 'react-native'

const Item = ({ title, value }: Props) => {
    return (
        <View className='w-full xxs:flex-col  gap-1 justify-start'>
            <Text fontFamily='outfit700' className='text-[#ffffff] md:text-[1.3rem] xxs:text-[1.2rem]'>{`${title}:`}</Text>
            <View className='flex flex-row gap-4 items-center'>
                <CopyText className='text-[#ffffff] lg:text-base xxs:text-sm'>{value}</CopyText>
                <CopyBtn size={30} text={value} />
            </View>
        </View>
    )
}

export default Item

type Props = {
    title: string
    value: string
}