import { Card, Tooltip } from 'antd';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import 'swiper/css/pagination';

const Announcements = () => (
	<aside className="w-full mt-4 -mb-4">
		<Swiper
			autoplay={{
				delay: 5000,
				pauseOnMouseEnter: true,
			}}
			// pagination={{
			// 	dynamicBullets: true,
			// 	clickable: true,
			// }}
			loop={true}
			draggable={true}
			modules={[Autoplay, Pagination]}
			className="shadow-md rounded bg-white border"
		>
			<SwiperSlide>
				<Card className="bg-white border-0 text-center [&>div]:!p-0">
					<Tooltip title="Alpine Utah YSA Stake">
						<a className="transition-all p-4 block sm:text-lg font-serif uppercase font-bold text-primary hover:underline hover:text-tertiary" href="https://alpineysastake.org" aria-label="Stake Information &amp; Activities" target="_blank">
							Stake Information &amp; Activities
						</a>
					</Tooltip>
				</Card>
			</SwiperSlide>
		</Swiper>
	</aside>
);

export default Announcements;