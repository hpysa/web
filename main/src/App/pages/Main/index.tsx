import { memo } from 'react';
import Carousel from './Carousel';
import Gallery from './Gallery';
import SocialMedia from './SocialMedia';
import UploadWidget from './UploadWidget';

const Main = memo(() => {
	const isAdmin = new URLSearchParams(window.location.search).has(import.meta.env.VITE_ADMIN);
	return (
		<>
			<Carousel />
			{ isAdmin && <UploadWidget />}
			<SocialMedia />
			<Gallery />
		</>
	);
});

export default Main;
