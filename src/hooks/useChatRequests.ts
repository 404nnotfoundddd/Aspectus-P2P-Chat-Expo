import { create } from 'zustand'

const initState: State = {
    requests: [{
        ID: '1234567890',
        publicKey: '1234567890',
        nickname: 'coolperson67',
        note: 'This is a description'
    }]
}

const useChatRequests = create<State & Action>((set, get) => ({
    ...initState,

    remove: (ID) => set({ ...get(), requests: get().requests.filter(request => request.ID !== ID) }),
    reset: () => set({ ...initState })
}))

export default useChatRequests

type State = {
    requests: {
        ID: string
        publicKey: string
        nickname: string
        note: string
    }[]
}

type Action = {
    remove: (ID: string) => void
    reset: () => void
}