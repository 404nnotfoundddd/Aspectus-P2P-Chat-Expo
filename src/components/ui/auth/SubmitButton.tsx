import Spinner from '@/components/ui/Spinner'
import Text from '@/components/ui/Text'
import { cn } from '@/utils'
import ArrowRightIn from '../svg/ArrowRightIn'
import { TouchableOpacity, View } from 'react-native'

const SubmitButton = ({ className, onSubmit, text, disabled, isLoading, isSuccess }: Props) => {
    return (
        <TouchableOpacity disabled={disabled} onPress={onSubmit} style={{ cursor: 'pointer' }} className={cn(`bg-[#0000005b] select-none flex flex-row p-2 gap-2 rounded-lg w-full drop-shadow-lg ${className}`)}>
            <View className='flex flex-row  w-full gap-3 items-center justify-center'>
                <Text fontFamily='outfit700' className='text-white'>{text}</Text>
                {isLoading ? <Spinner size={30} /> : isSuccess ? null : <ArrowRightIn height={30} width={30} />}
            </View>
        </TouchableOpacity>
    )
}

export default SubmitButton

type Props = {
    onSubmit: () => void
    className?: string
    text: string
    disabled: boolean
    isLoading: boolean
    isSuccess: boolean
}