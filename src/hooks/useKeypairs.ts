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
    privateKey: JsonWebKey | null
    publicKey: JsonWebKey | null
}

type Action = {
    setPrivKey: (key: JsonWebKey) => void
    setPubKey: (key: JsonWebKey) => void
    reset: () => void
}