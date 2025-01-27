import useSocketIO from '@/store/zustand/useSocketIO'
import Button from '@/components/ui/Button'
import Text from '@/components/ui/Text'

const TryAgainBtn = () => {
    return (
        <Button onPress={() => {
            useSocketIO.getState().io!.disconnect()
            useSocketIO.getState().io!.connect()
        }} className='rounded-md bg-[#ffffff35] p-2'>

            <Text fontFamily='outfit500'>Try again</Text>
        </Button>
    )
}

export default TryAgainBtn