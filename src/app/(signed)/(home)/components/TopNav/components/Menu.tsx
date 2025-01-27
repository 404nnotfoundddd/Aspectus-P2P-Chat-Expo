import Menu from '@/components/ui/svg/Menu'
import { isLeftSideOpenAtom } from '../../../atoms'
import { useAtom } from 'jotai'
import Button from '@/components/ui/Button'

const MenuBtn = () => {
    const [isOpen, setIsOpen] = useAtom(isLeftSideOpenAtom)

    return (
        <Button onPress={() => setIsOpen(!isOpen)} className='flex items-center justify-center'>
            <Menu width={30} height={30} className='opacity-50' />
        </Button>
    )
}

export default MenuBtn