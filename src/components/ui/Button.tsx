
import type { ComponentProps, ReactNode } from 'react'
import { Pressable, type View } from 'react-native'
import { forwardRef } from 'react'
import Text from './Text'

type Props = ComponentProps<typeof Pressable> & {
    title?: string
    children?: ReactNode
}

const Button = forwardRef<View, Props>(({
    children,
    title,
    ...rest
}, ref) => (
    <Pressable
        ref={ref}
        {...rest}
    >
        {title ? <Text>{title}</Text> : children}
    </Pressable>
))

Button.displayName = 'Button'

export default Button