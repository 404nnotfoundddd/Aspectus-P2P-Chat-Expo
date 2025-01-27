import type { PropsWithChildren } from 'react'
import ReactQuery from './components/ReactQuery'

const Providers = ({ children }: PropsWithChildren) => {
    return (
        <ReactQuery>
            {children}
        </ReactQuery>
    )
}

export default Providers
