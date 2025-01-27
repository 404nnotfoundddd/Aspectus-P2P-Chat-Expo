import { create } from 'zustand'

const initState: State = {
    encryptionKey: null,
}

const useRealEncryptionKey = create<State & Action>((set, get) => ({
    ...initState,

    setKey: (key: string) => set({ encryptionKey: key }),
    reset: () => set({ ...initState })
}))

export default useRealEncryptionKey

type State = {
    encryptionKey: string | null
}

type Action = {
    setKey: (key: string) => void
    reset: () => void
}