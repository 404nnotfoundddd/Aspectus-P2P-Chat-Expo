'use client'

import useSocketIO from '@/store/zustand/useSocketIO'
import { useEffect, type PropsWithChildren } from 'react'
import DisconnectedView from './components/DisconnectedView'
import LoadingView from './components/LoadingView'
import useSocketSetup from './hooks/useSocketSetup'
import { createSocketConnection } from './funcs'

const SocketIOProvider = ({ children }: Props) => {
  const {
    status,
    setupSocketListeners,
    ioOpts,
  } = useSocketSetup()

  const { isConnected, isAuthSuccess, isLoading, isDisconnected, error } = status


  useEffect(() => {
    useSocketIO.getState().setIO(createSocketConnection(ioOpts))
  }, [ioOpts])

  useEffect(setupSocketListeners, [useSocketIO(s => s.io)])


  if (isConnected && isAuthSuccess) return children
  if (isLoading) return <LoadingView />
  if (isDisconnected || error) return <DisconnectedView errors={error} />

}

type Props = PropsWithChildren

export default SocketIOProvider