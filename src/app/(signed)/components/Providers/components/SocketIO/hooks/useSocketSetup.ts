import useSocketIO from '@/store/zustand/useSocketIO'
import useMMKV from '@/store/zustand/useMMKV'
import { useState } from 'react'
import type { ManagerOptions, SocketOptions } from 'socket.io-client'
import useMMKVString from '@/hooks/useMMKVString'

const SOCKET_EVENTS = {
    CONNECT: 'connect',
    DISCONNECT: 'disconnect',
    CONNECT_ERROR: 'connect_error',
    RECONNECT_ERROR: 'reconnect_error',
    RECONNECT_ATTEMPT: 'reconnect_attempt',
    ERROR_FROM_SERVER: 'error_from_server',
    AUTH_SUCCESS: 'auth_success',
} as const

const initStatusState: StatusState = {
    error: [],
    isAuthSuccess: false,
    isLoading: true,
    isConnected: false,
    isDisconnected: false,
}

type StatusState = {
    error: string[]
    isConnected: boolean
    isAuthSuccess: boolean
    isLoading: boolean
    isDisconnected: boolean
}


const useSocketSetup = () => {
    const [password] = useMMKVString('password')
    const [userID] = useMMKVString('user_ID')
    const [status, setStatus] = useState<StatusState>(initStatusState)
    const io = useSocketIO(s => s.io)
    const [ioOpts] = useState<Partial<ManagerOptions & SocketOptions>>({
        auth: {
            secretID: password,
            userID: userID
        }
    })

    const setupSocketListeners = () => {
        if (!io) return

        io.on(SOCKET_EVENTS.AUTH_SUCCESS, () => {
            setStatus(prev => ({
                ...prev,
                isLoading: false,
                isConnected: true,
                isAuthSuccess: true,
                isDisconnected: false,
            }))
        })

        io.on(SOCKET_EVENTS.DISCONNECT, () => {
            setStatus(prev => ({
                ...prev,
                isLoading: false,
                isConnected: false,
                isDisconnected: true,
            }))
        })

        // Error handlers
        io.on(SOCKET_EVENTS.CONNECT_ERROR, (err) => {
            console.error(err)
            setStatus(prev => {
                if (prev.error.includes(err.message)) return prev
                return { ...prev, isLoading: false, isDisconnected: true, error: [...prev.error, err.message] }
            })
        })

        io.on(SOCKET_EVENTS.RECONNECT_ERROR, (e) => {
            console.error(e)
            setStatus(prev => {
                if (prev.error.includes(e.message)) return prev
                return { ...prev, isLoading: false, isDisconnected: true, error: [...prev.error, e.message] }
            })
        })

        io.on(SOCKET_EVENTS.ERROR_FROM_SERVER, (e: string) => {
            console.error(e)
            setStatus(prev => {
                if (prev.error.includes(e)) return prev
                return { ...prev, isLoading: false, isDisconnected: true, error: [...prev.error, e] }
            })
        })

        io.on(SOCKET_EVENTS.RECONNECT_ATTEMPT, () => setStatus(initStatusState))

        if (!ioOpts.autoConnect) io.connect()

        return () => {
            setStatus(initStatusState)
            if (io) io.disconnect()
        }
    }

    return {
        status,
        setupSocketListeners,
        ioOpts,
    }
}


export default useSocketSetup