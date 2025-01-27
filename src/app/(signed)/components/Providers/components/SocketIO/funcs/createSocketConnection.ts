import { env } from '@/env'
import { io as IOClient, type ManagerOptions, type SocketOptions } from 'socket.io-client'

const NAMESPACE = 'main'

export const createSocketConnection = (opts: Partial<ManagerOptions & SocketOptions>) => {
    return IOClient(`${env.EXPO_PUBLIC_SOCKETIO_URI}/${NAMESPACE}`, {
        autoConnect: false,
        withCredentials: true,
        secure: env.EXPO_PUBLIC_NODE_ENV === 'production',
        ...opts,
    })
}