import ProviderType from '@/types/providerType';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { memo } from 'react';

const QueryProvider = memo(({ children }: ProviderType) => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" position="left" />
        </QueryClientProvider>
    );
});

export default QueryProvider;
