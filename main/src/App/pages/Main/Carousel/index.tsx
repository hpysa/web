import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import Calendar from '../Calendar';

const Carousel = () => (
    <section className="relative w-full">
        <Swiper navigation={true} modules={[Navigation]} className="static rounded bg-white shadow-md">
            <SwiperSlide className="!h-fit">
                <Calendar />
            </SwiperSlide>
            <SwiperSlide className="!h-fit">
                <Calendar type="stake" />
            </SwiperSlide>
        </Swiper>
    </section>
);

export default Carousel;
