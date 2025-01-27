import Svg, { Path } from 'react-native-svg'

const User = ({ width, height }: Props) => {
    return (
        <Svg width={width} height={height} fill="none">
            <Path
                fill="#fff"
                stroke="#000"
                d="M666.595 334c0 183.817-149.016 332.833-332.833 332.833C149.943 666.833.929 517.817.929 334 .929 150.181 149.943 1.167 333.762 1.167 517.579 1.167 666.595 150.18 666.595 334Zm-332.833.5c55.506 0 100.5-44.994 100.5-100.5 0-55.504-44.994-100.5-100.5-100.5s-100.5 44.996-100.5 100.5c0 55.506 44.994 100.5 100.5 100.5Zm0 283.333c59.571 0 114.859-18.352 160.513-49.714 20.304-13.946 29.029-40.556 17.186-62.252C487.179 461.398 437.06 389 333.762 389c-103.295 0-153.418 72.394-177.701 116.867-11.846 21.696-3.119 48.302 17.183 62.249 45.655 31.362 100.944 49.717 160.518 49.717Z"
            />
        </Svg>
    )
}

type Props = {
    width: number
    height: number
}

export default User