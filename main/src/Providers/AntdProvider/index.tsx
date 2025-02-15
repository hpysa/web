import ProviderType from '@/types/providerType';
import { App, ConfigProvider } from 'antd';
import { memo } from 'react';

const AntdProvider = memo(({ children }: ProviderType) => (
    <ConfigProvider>
        <App>
            {children}
        </App>
    </ConfigProvider>
));

export default AntdProvider;