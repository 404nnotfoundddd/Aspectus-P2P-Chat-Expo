import { cn } from '@/utils'
import type { ComponentProps } from 'react'
import { Text as TextRN, type StyleProp, type TextStyle } from 'react-native'
import { forwardRef } from 'react'
import type { FontFamily } from '@/types'

const defaultClassName = 'text-[1.2rem] text-white '

type Props = {
    children: string
    style?: StyleProp<TextStyle>
    className?: string
    fontFamily?: FontFamily
} & ComponentProps<typeof TextRN>

const Text = forwardRef<TextRN, Props>(({
    children,
    style,
    className,
    fontFamily = 'outfit400',
    ...rest
}, ref) => (
    <TextRN
        ref={ref}
        style={[{ fontFamily }, style]}
        className={cn(`${defaultClassName} ${className}`)}
        {...rest}
    >
        {children}
    </TextRN>
))

Text.displayName = 'Text'

export default Text