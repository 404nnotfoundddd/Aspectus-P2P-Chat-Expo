import { create } from 'zustand'

const initState: State = {
    error: []
}

const useDisplayingErrors = create<State & Action>((set, get) => ({
    ...initState,

    add: (error) => set({
        ...get(),
        error: [...get().error, error].slice(-10) // Keep only the last 10 errors
    }),
    reset: () => set({ ...initState })
}))

export default useDisplayingErrors

type State = {
    error: string[]
}

type Action = {
    add: (error: string) => void
    reset: () => void
}