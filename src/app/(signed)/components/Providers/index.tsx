import type { PropsWithChildren } from 'react'
import SocketIOProvider from './components/SocketIO'

const Providers = ({ children }: PropsWithChildren) => {
  return <SocketIOProvider>
    {children}
  </SocketIOProvider>
}

export default Providers