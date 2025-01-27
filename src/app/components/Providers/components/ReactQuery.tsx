import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { PropsWithChildren } from 'react'

const queryClient = new QueryClient()

const ReactQuery = ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
)


export default ReactQuery