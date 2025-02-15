import { Tooltip } from 'antd';

const Sacrament = () => (
	<section>
		<h2>Sacrament Meeting</h2>
		<p>
			<Tooltip title="10380 N 6000 W, Highland, UT 84003">
				<a href="https://goo.gl/maps/LC6crS6CaqCwwARV9" target="_blank" aria-label="Heritage Park YSA Strasburg Building">Strasburg Building</a>
			</Tooltip>
			at 12:30PM on Sunday
		</p>
		<p>If you are planning to, or have already moved your records into the ward. <br /> Please fill out this <a href="https://tinyurl.com/HPYSAQ" target="_blank" aria-label="Heritage Park YSA New Member Questionnaire">questionnaire</a>.</p>
	</section>
);

export default Sacrament;