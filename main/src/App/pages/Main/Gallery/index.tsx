import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const images = [
	"https://res.cloudinary.com/hpysa/f_auto,q_auto/galentines.jpg",
	"https://res.cloudinary.com/hpysa/f_auto,q_auto/480441340_1574041573294041_7484656613158192710_n.jpg",
	"https://res.cloudinary.com/hpysa/f_auto,q_auto/movie-game-night.jpg",
	"https://res.cloudinary.com/hpysa/f_auto,q_auto/477587873_9188079464562701_5932187168783306515_n_esaubo.jpg",
	"https://res.cloudinary.com/hpysa/f_auto,q_auto/475411045_3447973728670219_8707325149973088983_n_cxtgul.jpg",
	"https://res.cloudinary.com/hpysa/f_auto,q_auto/474374166_10160444206346599_1767105335539540890_n_dneoce.jpg",
	"https://res.cloudinary.com/hpysa/f_auto,q_auto/476108341_1565298607501671_5101719950255154722_n_ghnw1e.jpg",
	"https://res.cloudinary.com/hpysa/f_auto,q_auto/476085367_10229340564679208_2132137147065363347_n_qdjfvq.jpg",
	"https://res.cloudinary.com/hpysa/f_auto,q_auto/475161284_9114995718537743_4280222097986070787_n_h1sha0.jpg",
	"https://res.cloudinary.com/hpysa/f_auto,q_auto/474140660_1555565975141601_7484678410726487086_n_y7czbf.jpg",
	"https://res.cloudinary.com/hpysa/f_auto,q_auto/473441177_10229204246151330_1855896232472689273_n_pflygt.jpg",
	"https://res.cloudinary.com/hpysa/f_auto,q_auto/472609044_1545918696106329_1763485354125993890_n_qqjbtd.jpg",
	"https://res.cloudinary.com/hpysa/f_auto,q_auto/472751860_9001231496580833_4228976801930637330_n_eiyw6w.jpg",
	"https://res.cloudinary.com/hpysa/f_auto,q_auto/470236459_8782646351782951_7773807892989331485_n_nmj0ut.jpg",
]
const Gallery = () => (
	<section className="flex flex-col gap-8">
		<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2 }}>
			<Masonry containerTag="section" className="!gap-6 [&>div]:!gap-6">
				{ images.map((image, i) => <img className="block w-full shadow-md rounded" key={i} src={image} />) }
			</Masonry>
		</ResponsiveMasonry>
		<hr className="mt-4" />
	</section>
);

export default Gallery;