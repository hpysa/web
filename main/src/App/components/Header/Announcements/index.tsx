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
						<a className="flex justify-center items-center gap-4 transition-all px-4 py-2 sm:text-lg font-serif uppercase font-bold text-primary hover:underline hover:text-tertiary" href="https://alpineysastake.org" aria-label="Stake Information &amp; Activities" target="_blank">
							<img className="size-16 sm:size-20 sm:block " src="https://lh3.googleusercontent.com/Xa77ciDfTaO-x81Zrh2P5revCOUVo5gPTOZE9oWhl_VTDrJrutLdC_iWaFcd1dp3VIsvmAmk9W0dK3RIGDKAqFA=w16383"/>
							<span>STAKE EVENTS</span>
						</a>
					</Tooltip>
				</Card>
			</SwiperSlide>
		</Swiper>
	</aside>
);

export default Announcements;