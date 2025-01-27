import { motify } from 'moti'
import Button from './Button'
import { forwardRef } from 'react'
import type { ComponentProps } from 'react'
import type { View } from 'react-native'

type ButtonProps = ComponentProps<typeof Button>

const ForwardedButton = forwardRef<View, ButtonProps>((props, ref) => (
    <Button {...props} ref={ref} />
))

ForwardedButton.displayName = 'ForwardedButton'

const AnimatedButton = motify(ForwardedButton)()

export default AnimatedButton