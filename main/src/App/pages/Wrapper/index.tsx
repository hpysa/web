import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Wrapper = () => (
	<section className="max-w-4xl flex flex-col mx-auto gap-8 px-4 lg:px-0">
		<Header />
		<main className="flex flex-col gap-8 mt-8 sm:mt-0">
			<Outlet />
		</main>
		<Footer />
	</section>
);

export default Wrapper