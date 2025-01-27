import { motify } from 'moti'
import Text from './Text'
import { forwardRef } from 'react'
import type { Text as RNText } from 'react-native'
import type { ComponentProps } from 'react'

type TextProps = ComponentProps<typeof Text>

const ForwardedText = forwardRef<RNText, TextProps>((props, ref) => (
    <Text {...props} ref={ref} />
))

ForwardedText.displayName = 'ForwardedText'

const AnimatedText = motify(ForwardedText)()

export default AnimatedText