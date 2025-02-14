import { Outlet } from "react-router-dom";

/**
 * Renders the layout component with the outlet and footer.
 *
 * @return {JSX.Element} The rendered layout component
 */
const Layout = () => (
    <>
        <h1>HPYSA</h1>
        <br />
        <Outlet />
        <footer>
            <br /><hr />
            <p>&copy; {(new Date()).getFullYear()} - Heritage Park YSA</p>
        </footer>
    </>
);

export default Layout;