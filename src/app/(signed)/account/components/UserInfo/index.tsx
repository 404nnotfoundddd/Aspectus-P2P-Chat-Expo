import { View } from 'react-native'
import Item from './components/Item'

const UserInfo = ({ ID }: Props) => {
    return (
        <View className='flex flex-col gap-2 py-2 rounded-xl w-full '>
            {ID && <Item title="ID" value={`${ID}`} />}
        </View>
    )
}

type Props = {
    ID: string
}

export default UserInfo