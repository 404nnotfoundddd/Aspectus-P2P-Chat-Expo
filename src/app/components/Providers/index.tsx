import type { PropsWithChildren } from 'react'
import ReactQuery from './components/ReactQuery'
import ErrorDisplay from './components/ErrorDisplay'

const Providers = ({ children }: PropsWithChildren) => {
    return (
        <ReactQuery>
            <ErrorDisplay>
                {children}
            </ErrorDisplay>
        </ReactQuery>
    )
}

export default Providers
