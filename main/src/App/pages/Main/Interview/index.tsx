import { Collapse } from 'antd';
import { lazy, Suspense } from 'react';

const Stake = lazy(() => import('./Stake'));
const Bishop = lazy(() => import('./Bishop'));

const Interview = () => (
	<section>
		<h2>Need an Interview?</h2>
		<Collapse
			items={[
				{
					key: '1',
					label: 'Need to meet with Bishop?',
					children: (
						<Suspense fallback={<div>Loading...</div>}>
							<Bishop />
						</Suspense>
					)
				},
				{
					key: '2',
					label: 'Need to meet with the Stake Presidency?',
					children: (
						<Suspense fallback={<div>Loading...</div>}>
							<Stake />
						</Suspense>
					)
				}
			]}
		/>
	</section>
);

export default Interview;