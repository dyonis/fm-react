import { Outlet } from "react-router-dom";
import Tabs from "../components/Tabs/Tabs";

const Layout = () => {
    return (
        <>
            <header className="App-header">
                <Tabs />
            </header>

            <Outlet />
        </>
    )
};

export default Layout;
