import { create } from 'zustand'

const initState: State = {

}

const usePeers = create<State & Action>((set, get) => ({
    ...initState,

    reset: () => set({ ...initState })
}))

export default usePeers

type State = {

}

type Action = {
    reset: () => void
}