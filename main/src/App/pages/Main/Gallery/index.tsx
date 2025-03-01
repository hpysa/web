import { getImages, getImageURL } from '@/utils/image';
import { AdvancedImage, lazyload, responsive } from '@cloudinary/react';
import { useQuery } from '@tanstack/react-query';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const Gallery = () => {
	const { data } = useQuery({ 
        enabled: true,
        queryKey: ['images'], 
        queryFn: () => getImages(import.meta.env.VITE_DATA_URL),
	});

	return data ? (
		<section className="flex flex-col gap-8">
			<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2 }}>
				<Masonry containerTag="section" className="!gap-6 [&>div]:!gap-6">
					{ data.map((image: any, i: number) => (
						<AdvancedImage
							className="block w-full shadow-md rounded"
							cldImg={getImageURL(image)}
							plugins={[lazyload({ rootMargin: '350px 0px 0px 0px', threshold: 0 }), responsive()]}
							key={i}
						/>)) }
				</Masonry>
			</ResponsiveMasonry>
			<hr className="mt-4" />
		</section>
	) : null;
};

export default Gallery;