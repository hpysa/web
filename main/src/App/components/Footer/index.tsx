const Footer = () => (
	<footer className="flex items-center justify-center !mb-8">
		<small className="font-sans text-base sm:text-lg w-full text-center">
			&copy; {new Date().getFullYear()} &ndash; <a className="transition-all hover:underline hover:text-tertiary" href="/" aria-label="Heritage Park YSA">Heritage Park YSA</a></small>
	</footer>
);

export default Footer;