import { Route, Routes } from "react-router-dom";

const Footer = () => (
	<footer className="flex items-center justify-center !mb-8">
		<small className="font-sans text-base sm:text-lg w-full text-center">
			<span>&copy; {new Date().getFullYear()} &ndash; </span>
			<Routes>
				<Route index element={<a className="transition-all hover:underline hover:text-tertiary" href="/" aria-label="Heritage Park YSA">Heritage Park YSA</a>} />
			</Routes>
		</small>
	</footer>
);

export default Footer;