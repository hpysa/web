import { memo } from 'react';
import Calendar from './Calendar';
import Gallery from './Gallery';
// import Info from './Info';
import SocialMedia from './SocialMedia';
import Carousel from './Carousel';

const Main = memo(() => (
	<>
		{/* <Info /> */}
		<Carousel />
		{/* <Calendar /> */}
		{/* <Calendar type="stake" /> */}
		<SocialMedia />
		<Gallery />
    </>
));

export default Main;
