import type { ComponentProps } from 'react'
import { ScrollView as RNScrollView } from 'react-native'

type Props = ComponentProps<typeof RNScrollView>

const ScrollView = ({ children, ...rest }: Props) => {
    return <RNScrollView overScrollMode="never" {...rest}>
        {children}
    </RNScrollView>
}

export default ScrollView