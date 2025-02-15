import { Collapse, Spin } from 'antd';
import { lazy, Suspense } from 'react';

const Leadership = lazy(() => import("./Leadership"));
const Activities = lazy(() => import("./Activities"));

const Accordion = () => (
	<section>
		<Collapse
			className="font-sans shadow-md"
			size="large"
			accordion
			defaultActiveKey={2}
			items={[
				{ 
					key: 1,
					label: 'Ward Leadership', 
					children: (
						<Suspense fallback={<Spin size="large" className="w-full" />}>
							<Leadership />
						</Suspense>
					)
				}, 
				{
					key: 2, 
					label: 'Upcoming Ward Activities', 
					children: (
						<Suspense fallback={<Spin size="large" className="w-full" />}>
							<Activities />
						</Suspense>
					)
				}
			]}
		/>
	</section>
);

export default Accordion;