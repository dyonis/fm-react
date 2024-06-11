import { Outlet } from "react-router-dom";
import NavbarBottom from "./NavbarBottom";

const Layout = () => {
    return (
        <>
            <Outlet />

            <footer>
                <NavbarBottom />
            </footer>
        </>
    )
};

export default Layout;
