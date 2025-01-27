import Button from '@/components/ui/Button'
import Text from '@/components/ui/Text'
import { cn } from '@/utils'
import useImport from './hooks/useImport'
import { useAtomValue } from 'jotai'
import { encryptionKeyAtom } from '../../atoms'
import { View } from 'react-native'
import ImportSvg from '@/components/ui/svg/ImportSvg'


const Import = () => {
    const encryptionKeyInput = useAtomValue(encryptionKeyAtom)
    const { error, importFile, isSuccess } = useImport({ encryptionKeyInput })

    const isDisabled = !encryptionKeyInput

    return (
        <View className='flex flex-col gap-2 h-full'>
            {error && <Text className='text-red-500 text-sm'>{`Something went wrong, please try again.`}</Text>}
            <Button onPress={importFile} disabled={isDisabled} className={cn('bg-red-500 rounded-lg flex-row gap-4 p-2 h-full flex items-center justify-center', {
                'opacity-50 cursor-not-allowed': isDisabled,
            })}>
                <Text fontFamily='outfit700' className='text-white'>Import File</Text>
                {isSuccess ? <ImportSvg height={30} width={30} /> : null}
            </Button>
        </View>
    )
}

export default Import