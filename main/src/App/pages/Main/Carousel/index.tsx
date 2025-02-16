import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import 'swiper/css/navigation';

import Calendar from '../Calendar';

const Carousel = () => (
	<aside className="relative w-full">
		<Swiper
			navigation={true}
			modules={[Navigation]}
			className="static shadow-md rounded bg-white"
		>
			<SwiperSlide className="!h-fit">
				<Calendar />
			</SwiperSlide>
			<SwiperSlide className="!h-fit">
				<Calendar type="stake" />
			</SwiperSlide>
		</Swiper>
	</aside>
);

export default Carousel;