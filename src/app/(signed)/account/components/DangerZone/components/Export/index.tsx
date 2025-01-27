import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'
import Modal from './Modal'
import { Fragment, useState } from 'react'

const Export = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    return (
        <Fragment>
            <Button onPress={() => setIsModalVisible(true)} className='p-2 bg-white rounded-lg'>
                <Text fontFamily='outfit600' className='text-red-500 text-[1.2rem] text-center'>Export data</Text>
            </Button>
            <Modal visible={isModalVisible} close={() => setIsModalVisible(false)} />
        </Fragment>
    )
}

export default Export