import { Outlet } from "react-router-dom";

import s from './Layout.module.css';

/**
 * Renders the layout component with the outlet and footer.
 *
 * @return {JSX.Element} The rendered layout component
 */
const Layout = () => (
    <>
        <h1 className={s.header}>HPYSA</h1>
        <br />
        <Outlet />
        <footer className={s.foot}>
            <br /><hr />
            <p>&copy; {(new Date()).getFullYear()} - Heritage Park YSA</p>
        </footer>
    </>
);

export default Layout;