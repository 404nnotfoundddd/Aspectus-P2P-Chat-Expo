import useMMKV from '@/store/zustand/useMMKV'
import type { BackupFile } from '@/types'
import superjson from 'superjson'

const getMMKVItems = (items: string[]) => {
    return items.map((name) => {
        const value = useMMKV.getItem(name)
        console.log('mmkw', name, value)
        if (!value) return null

        return {
            name,
            value
        }
    }).filter(value => !!value)
}

export const createBackupData = () => {
    const data: BackupFile = {
        mmkv: getMMKVItems([
            'nickname',
            'about'
        ])
    }

    return superjson.stringify(data)
}
