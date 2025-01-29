import type { Unarray } from '@/types'
import { create } from 'zustand'

const initState: State = {
    requests: []
}

const useChatRequests = create<State & Action>((set, get) => ({
    ...initState,

    add: (data) => set({ ...get(), requests: [...get().requests, data] }),
    remove: (ID) => set({ ...get(), requests: get().requests.filter(request => request.ID !== ID) }),
    reset: () => set({ ...initState })
}))

export default useChatRequests

type State = {
    requests: {
        ID: string
        publicKey: JsonWebKey
        note: string
    }[]
}

type Action = {
    remove: (ID: string) => void
    reset: () => void
    add: (data: Unarray<State['requests']>) => void
}