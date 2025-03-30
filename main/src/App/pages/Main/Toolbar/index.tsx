import { lazy } from 'react';

const UploadForm = lazy(() => import('../UploadForm'));
const UploadWidget = lazy(() => import('../UploadWidget'));

const Toolbar = () => (
    <aside className="fixed bottom-4 right-4 z-50 flex flex-col gap-4 lg:bottom-8 lg:right-8">
        <UploadForm />
        <UploadWidget />
    </aside>
);
export default Toolbar;
