import { lazy, memo } from 'react';

const Carousel = lazy(() => import('./Carousel'));
const SocialMedia = lazy(() => import('./SocialMedia'));
const Gallery = lazy(() => import('./Gallery'));
const UploadWidget = lazy(() => import('./UploadWidget'));

const Main = memo(() => {
	const isAdmin = new URLSearchParams(window.location.search).has(import.meta.env.VITE_ADMIN);
	return (
		<>
			<Carousel />
			<SocialMedia />
			<Gallery />
			{ isAdmin && <UploadWidget />}
		</>
	);
});

export default Main;
