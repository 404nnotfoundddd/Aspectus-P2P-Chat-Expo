import Text from '@/components/ui/Text'
import useChatRequests from '@/hooks/useChatRequests'
import useKeypairs from '@/hooks/useKeypairs'
import useSocketIO from '@/store/zustand/useSocketIO'
import { Modal, View, TouchableOpacity } from 'react-native'

const ChatRequests = () => {
    const requests = useChatRequests(s => s.requests)
    const removeRequest = useChatRequests(s => s.remove)
    const IO = useSocketIO(s => s.io)
    const publicKey = useKeypairs(s => s.publicKey)

    const handleBlock = (ID: string) => {
        removeRequest(ID)
        IO?.emit('block-user', {
            userID: ID
        })
    }

    const handleDecline = (ID: string) => {
        removeRequest(ID)
        IO?.emit('reject-chat-req', {
            userID: ID
        })
    }

    const handleAccept = (ID: string) => {
        removeRequest(ID)
        IO?.emit('accept-chat-req', {
            userID: ID,
            publicKey
        })
    }

    return requests.map(({ ID, description, nickname, publicKey }) => (
        <Modal key={ID} transparent={true}>
            <View className='w-full flex items-center justify-center h-full bg-[#0000006e]'>
                <View className='bg-white p-6 rounded-2xl w-[85%] gap-4 max-w-[400px] shadow-lg'>
                    <Text className='text-xl text-black'>{`${nickname} (${ID}) Wants to chat with you`}</Text>
                    <Text className='text-gray-600 text-md   pb-4'>{`Description: ${description}doasjdopasjdoaspjdopja`}</Text>

                    <View className='flex flex-row justify-end space-x-3'>
                        <TouchableOpacity
                            className='px-4 py-2 rounded-lg bg-red-400'
                            onPress={() => handleBlock(ID)}
                        >
                            <Text className='text-gray-700'>Block</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            className='px-4 py-2 rounded-lg bg-gray-200'
                            onPress={() => handleDecline(ID)}
                        >
                            <Text className='text-gray-700'>Decline</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            className='px-4 py-2 rounded-lg bg-[#5000f9]'
                            onPress={() => handleAccept(ID)}
                        >
                            <Text className='text-white'>Accept</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    ))
}

export default ChatRequests