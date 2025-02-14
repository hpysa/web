import { memo } from "react";
import Accordion from "./Accordion";
import Activities from "../Main/Activities";
import SocialMedia from "./SocialMedia";

const Main = memo(() => (
	<>
		<SocialMedia />
		<Accordion />
		<Activities />
    </>
));

export default Main;
