import { useEffect, useRef } from 'react';

const UploadWidget = () => {
	const cloudinaryRef = useRef();
	const widgetRef = useRef();
	useEffect(() => {
		cloudinaryRef.current = window.cloudinary;
		widgetRef.current = cloudinaryRef.current.createUploadWidget({
			cloudName: 'hpysa',
			uploadPreset: 'ml_default',
			folder: 'activity',
			tags: ['activity']
		});
	}, []);
	
	return (
		<button className="fixed flex items-center justify-center z-50 bottom-4 right-4 lg:bottom-8 lg:right-8 rounded-full size-20 bg-white shadow-lg drop-shadow-lg" aria-label="Cloudinary Upload" onClick={() => widgetRef.current.open()}>
			<img className="size-12" src="https://res.cloudinary.com/hpysa/f_auto,q_auto/cloudinary.svg" alt="Cloudinary Logo" />
		</button>
	);
};

export default UploadWidget;