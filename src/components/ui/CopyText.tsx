import { cn } from '@/utils'
import type { ComponentProps } from 'react'
import { Text as TextRN, type StyleProp, type TextStyle } from 'react-native'
import { forwardRef, useEffect, useState } from 'react'
import type { FontFamily } from '@/types'
import * as Clipboard from 'expo-clipboard';

const defaultClassName = 'text-[1.2rem] text-white '

type Props = {
    children: string
    style?: StyleProp<TextStyle>
    className?: string
    fontFamily?: FontFamily
} & ComponentProps<typeof TextRN>



const CopyText = forwardRef<TextRN, Props>(({
    children,
    style,
    className,
    fontFamily = 'outfit400',
    ...rest
}, ref) => {
    const [isCopied, setIsCopied] = useState(false)

    const copy = async () => {
        await Clipboard.setStringAsync(children)
        setIsCopied(true)
    }

    useEffect(() => {
        setTimeout(() => {
            setIsCopied(false)
        }, 2000)
    }, [isCopied])

    return <TextRN
        onPress={copy}
        ref={ref}
        style={[{ fontFamily }, style]}
        className={cn(`${defaultClassName} ${className}`)}
        {...rest}
    >
        {isCopied ? 'Copied' : children}
    </TextRN>
})

CopyText.displayName = 'CopyText'

export default CopyText