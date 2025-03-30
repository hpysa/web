import ProviderType from '@/types/providerType';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { memo } from 'react';

const QueryProvider = memo(({ children }: ProviderType) => {
    const queryClient = new QueryClient();

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
});

export default QueryProvider;
