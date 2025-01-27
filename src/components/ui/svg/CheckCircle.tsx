import Svg, { Path } from 'react-native-svg'

const CheckCircle = ({ width, height, fill = '#fff' }: Props) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Path
                fill={fill}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47 2.235-2.236L14.97 8.97a.75.75 0 0 1 1.06 0Z"
            />
        </Svg>
    )
}

type Props = {
    width: number
    height: number
    fill?: string
}

export default CheckCircle