import { lazy, memo } from 'react';

const Announcements = lazy(() => import('./Announcements'));
const Carousel = lazy(() => import('./Carousel'));
const SocialMedia = lazy(() => import('./SocialMedia'));
const Gallery = lazy(() => import('./Gallery'));
const Toolbar = lazy(() => import('./Toolbar'));

const Main = memo(() => {
    const isAdmin = new URLSearchParams(window.location.search).has(import.meta.env.VITE_ADMIN);
    return (
        <>
            <Carousel />
            <Announcements />
            <SocialMedia />
            <Gallery />
            {isAdmin && <Toolbar />}
        </>
    );
});

export default Main;
