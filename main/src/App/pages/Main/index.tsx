import { memo } from 'react';
import Accordion from './Accordion';
import Feed from './Feed';
import SocialMedia from './SocialMedia';

const Main = memo(() => (
	<>
		<Accordion />
		<SocialMedia />
		<Feed />
    </>
));

export default Main;
