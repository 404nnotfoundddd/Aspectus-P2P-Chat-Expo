import { cn } from '@/utils'
import type { ComponentProps } from 'react'
import { Text as TextRN, View, type StyleProp, type TextStyle } from 'react-native'
import { forwardRef, useEffect, useState } from 'react'
import type { FontFamily } from '@/types'
import { Image } from 'expo-image'
import Button from './Button'
import CopyBtn from '../CopyBtn'
import EyeOff from './svg/EyeOff'
import Eye from './svg/Eye'


type Props = {
    children: string
    style?: StyleProp<TextStyle>
    className?: string
    fontFamily?: FontFamily
} & ComponentProps<typeof TextRN>



const SecretText = forwardRef<TextRN, Props>(({
    children,
    style,
    className,
    fontFamily = 'outfit400',
    ...rest
}, ref) => {
    const [hide, setHide] = useState<boolean>(true)

    const unHide = async () => setHide(!hide)

    return <View className='flex flex-col flex-wrap gap-2 items-start' >
        <TextRN
            ref={ref}
            style={[{ fontFamily }, style]}
            className={cn(`text-[1.2rem] text-white ${className}`)}
            {...rest}
        >
            {hide ? children.replace(/./g, '*') : children}
        </TextRN>

        <View className='flex flex-row gap-2 items-center'>
            <Button onPress={unHide}>
                {hide ? <EyeOff width={30} height={30} /> : <Eye width={30} height={30} />}
            </Button>

            <CopyBtn text={children} size={30} />
        </View>
    </View>
})

SecretText.displayName = 'SecretText'

export default SecretText