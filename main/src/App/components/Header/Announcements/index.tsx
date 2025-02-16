import { Card } from 'antd';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import 'swiper/css/pagination';

const Announcements = () => (
	<aside className="w-full mt-4 -mb-4">
		<Swiper
			autoplay={{
				delay: 4000,
				pauseOnMouseEnter: true,
			}}
			pagination={{
				clickable: true,
			}}
			autoHeight={true}
			direction={"vertical"}
			loop={true}
			draggable={true}
			modules={[Autoplay, Pagination]}
			className="shadow-md rounded bg-white border"
		>
			<SwiperSlide className="!h-fit">
				<Card className="bg-white border-0 text-center [&>div]:!p-0">
					<a className="flex justify-center items-center gap-3 xxs:gap-4 transition-all px-4 py-2 sm:text-lg font-serif uppercase font-bold text-primary hover:underline hover:text-tertiary" href="https://alpineysastake.org" aria-label="Stake Events" target="_blank">
						<img className="size-16 sm:size-20" src="https://res.cloudinary.com/hpysa/f_auto,q_auto/alpine-utah-ysa-stake" alt="Alpine Utah YSA Stake"/>
						<span>STAKE EVENTS</span>
					</a>
				</Card>
			</SwiperSlide>
			<SwiperSlide className="!h-fit">
				<Card className="bg-white border-0 text-center [&>div]:!p-0">
					<a className="flex justify-center items-center gap-3 xxs:gap-4 transition-all px-4 py-2 sm:text-lg font-serif uppercase font-bold text-primary hover:underline hover:text-tertiary" href="https://temple-online-scheduling.churchofjesuschrist.org" aria-label="Temple Schedule" target="_blank">
						<img className="size-16 sm:size-20" src="https://res.cloudinary.com/hpysa/f_auto,q_auto/alpine-utah-ysa-stake" alt="Alpine Utah YSA Stake"/>
						<span>TEMPLE SCHEDULE</span>
					</a>
				</Card>
			</SwiperSlide>
			<SwiperSlide className="!h-fit">
				<Card className="bg-white border-0 text-center [&>div]:!p-0">
					<a className="flex justify-center items-center gap-3 xxs:gap-4 transition-all px-4 py-2 sm:text-lg font-serif uppercase font-bold text-primary hover:underline hover:text-tertiary" href="https://www.churchofjesuschrist.org/study" aria-label="Gospel Library" target="_blank">
						<img className="size-16 sm:size-20" src="https://res.cloudinary.com/hpysa/f_auto,q_auto/alpine-utah-ysa-stake" alt="Alpine Utah YSA Stake"/>
						<span>GOSPEL LIBRARY</span>
					</a>
				</Card>
			</SwiperSlide>
		</Swiper>
	</aside>
);

export default Announcements;