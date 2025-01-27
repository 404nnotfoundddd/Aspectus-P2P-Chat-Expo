import { create } from 'zustand'

const initState: State = {
    privateKey: null,
    publicKey: null,
}

const useKeypairs = create<State & Action>((set, get) => ({
    ...initState,

    setPrivKey: (key) => set({ ...get(), privateKey: key }),
    setPubKey: (key) => set({ ...get(), publicKey: key }),
    reset: () => set({ ...initState })
}))

export default useKeypairs

type State = {
    privateKey: string | JsonWebKey | null
    publicKey: string | JsonWebKey | null
}

type Action = {
    setPrivKey: (key: string | JsonWebKey) => void
    setPubKey: (key: string | JsonWebKey) => void
    reset: () => void
}