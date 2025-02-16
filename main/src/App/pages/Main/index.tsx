import { memo } from 'react';
// import Calendar from './Calendar';
import Carousel from './Carousel';
import Gallery from './Gallery';
// import Info from './Info';
import SocialMedia from './SocialMedia';

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
