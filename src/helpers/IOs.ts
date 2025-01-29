import type { Socket } from 'socket.io-client';


type ReceiveSendChatReqData = {
    userID: string
    publicKey: JsonWebKey
    note: string
}

type SocketData = Socket | null

export const receiveChatReq = (s: SocketData, callback: (data: ReceiveSendChatReqData) => void) => {
    if (!s) return
    s.on('receive-chat-req', callback)
}

export const sendChatReq = (s: SocketData, data: ReceiveSendChatReqData) => {
    if (!s) return
    s.emit('send-chat-req', data)
}


type AcceptChatReqData = {
    userID: string
    publicKey: JsonWebKey
}

export const acceptChatReq = (s: SocketData, data: AcceptChatReqData) => {
    if (!s) return
    s.emit('accept-chat-req', data)
}

type RejectChatReqData = {
    userID: string
}

export const rejectChatReq = (s: SocketData, data: RejectChatReqData) => {
    if (!s) return
    s.emit('reject-chat-req', data)
}

export const receiveRejectedChatReq = (s: SocketData, callback: (data: RejectChatReqData) => void) => {
    if (!s) return
    s.on('receive-rejected-chat-req', callback)
}

export const receiveAcceptedChatReq = (s: SocketData, callback: (data: AcceptChatReqData) => void) => {
    if (!s) return
    s.on('receive-accepted-chat-req', callback)
}

type SendSignalData = {
    to: string
    data: any
}

export const sendSignalData = (s: SocketData, data: SendSignalData) => {
    if (!s) return
    s.emit('send-signal-data', data)
}


type ReceiveSignalData = {
    from: string
    data: any
}

export const receiveSignalData = (s: SocketData, callback: (data: ReceiveSignalData) => void) => {
    if (!s) return
    s.on('receive-signal-data', callback)
}


export const blockUser = (s: SocketData, data: { userID: string }) => {
    if (!s) return
    s.emit('block-user', data)
}

export const unBlockUser = (s: SocketData, data: { userID: string }) => {
    if (!s) return
    s.emit('unblock-user', data)
}