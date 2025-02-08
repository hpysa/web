import { Outlet } from "react-router-dom";

export default function Wrapper() {
    return (
        <>
            <main>
                <Outlet />
            </main>
            <footer>
                <br /><hr />
                <p>&copy; {new Date().getFullYear()} - Heritage Park YSA</p>
            </footer>
        </>
    );
}