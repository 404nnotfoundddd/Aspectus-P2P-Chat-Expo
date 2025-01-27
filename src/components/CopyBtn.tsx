import { Image } from 'expo-image'
import Button from './ui/Button'
import { useEffect, useState } from 'react'
import * as Clipboard from 'expo-clipboard'
import CheckCircle from './ui/svg/CheckCircle'
import Copy from './ui/svg/Copy'

const CopyBtn = ({ text, size = 20 }: Props) => {
    const [isCopied, setIsCopied] = useState(false)

    const onCopy = async () => {
        await Clipboard.setStringAsync(text)
        setIsCopied(true)
    }

    useEffect(() => {
        setTimeout(() => {
            setIsCopied(false)
        }, 2000)
    }, [isCopied])


    return (
        <Button onPress={onCopy} className=''>
            {isCopied ? <CheckCircle height={size} width={size} /> : <Copy height={size} width={size} />}
        </Button>
    )

}

type Props = {
    text: string
    size?: number
}

export default CopyBtn