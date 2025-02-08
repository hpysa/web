import { ConfigProvider, App } from 'antd';
import { memo } from 'react';

import ProviderType from './providerType';

const AntdProvider = memo(({ children }: ProviderType) => (
    <ConfigProvider>
        <App>
            {children}
        </App>
    </ConfigProvider>
));

export default AntdProvider;
