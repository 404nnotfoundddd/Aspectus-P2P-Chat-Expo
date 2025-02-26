import Svg, { Path } from 'react-native-svg'

const Eye = ({ width, height }: Props) => {
    return (
        <Svg width={width} height={height} fill="none" viewBox="0 0 24 24">
            <Path
                fill="#fff"
                fillRule="evenodd"
                d="M4.19 7.262C5.94 5.577 8.517 4 12 4c3.483 0 6.06 1.577 7.81 3.262a15.086 15.086 0 0 1 3.001 4.11c.193.399.193.857 0 1.255a15.086 15.086 0 0 1-3 4.111C18.06 18.423 15.483 20 12 20c-3.483 0-6.06-1.577-7.81-3.262a15.088 15.088 0 0 1-3.001-4.11 1.435 1.435 0 0 1 0-1.255 15.088 15.088 0 0 1 3-4.111zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                clipRule="evenodd"
            />
        </Svg>
    )
}

type Props = {
    width: number
    height: number
}

export default Eye