import { Outlet } from "react-router-dom";

/**
 * Renders the layout component with the outlet and footer.
 *
 * @return {JSX.Element} The rendered layout component
 */
const Wrapper = () => (
    <>
        <main>
            <Outlet />
        </main>
        <footer>
            <br /><hr />
            <p>&copy; {(new Date()).getFullYear()} - Heritage Park YSA</p>
        </footer>
    </>
);

export default Wrapper;