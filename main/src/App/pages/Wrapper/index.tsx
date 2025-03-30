import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Wrapper = () => (
    <section className="mx-auto flex max-w-4xl flex-col gap-8 px-4 lg:px-0">
        <Header />
        <main className="mt-8 flex flex-col gap-8 sm:mt-0">
            <Outlet />
        </main>
        <Footer />
    </section>
);

export default Wrapper;
