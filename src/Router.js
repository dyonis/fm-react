import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Screens/Home';
import About from './Screens/About';
import Contact from './Screens/Contact';
import Layout from "./Layout/Layout";
import NoPage from "./Screens/NoPage";
import Table from "./Screens/Table";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="table" element={<Table />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
