import { cn } from '@/utils'
import Svg from '@/components/ui/svg/Spinner'
import { View } from 'moti'

type SpinnerProps = {
  className?: string | undefined
  size?: number | undefined
}

const Spinner = ({ className, size = 30 }: SpinnerProps) => (
  <View
    from={{
      rotate: '0deg',
    }}
    animate={{
      rotate: '360deg',
    }}
    transition={{
      type: 'timing',
      duration: 1000,
      loop: true,
    }}
    className={cn(
      `drop-shadow-[0_0px_2px_rgba(0,0,0,0.55)] ${className}`,
    )}
  >
    <Svg width={size} height={size} />
  </View>
)

export default Spinner
