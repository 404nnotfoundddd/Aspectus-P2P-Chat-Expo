import useMMKV from '@/store/zustand/useMMKV'
import type { BackupFile } from '@/types'

export const importBackupData = (data: BackupFile) => {
    data.mmkv.forEach(({ name, value }) => {
        useMMKV.setItem(name, value)
    })
}