import type { FontFamily } from '@/types'
import type { ComponentProps } from 'react'
import { TextInput as RNTextInput } from 'react-native'
import { forwardRef } from 'react'

const TextInput = forwardRef<RNTextInput, Props>(
    ({ fontFamily = 'outfit500', style, ...rest }, ref) =>
        <RNTextInput
            ref={ref}
            style={[{ fontFamily }, style]}
            {...rest}
        />
)

type Props = ComponentProps<typeof RNTextInput> & {
    fontFamily?: FontFamily
}

export default TextInput