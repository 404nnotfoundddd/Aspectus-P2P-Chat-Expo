import Button from '@/components/ui/Button'
import Text from '@/components/ui/Text'
import { View } from 'react-native'

const Users = () => {

    return (
        <View className='grow flex flex-col gap-2 p-4'>
            {/* {IDs.length > 0 ? (
                IDs.map((ID) => (
                    <Button className='flex flex-row gap-2 items-center hover:bg-[#ffffff23] p-2 rounded-lg' key={ID}>
                        <Text className='text-[#ffffffa8] text-[1.2rem]'>{users[ID]?.nickname}</Text>
                    </Button>
                ))
            ) : <Text className='text-[#ffffffa8] text-[1.2rem]'>Seems like you have no friends yet</Text>
            } */}
        </View>)
}

export default Users