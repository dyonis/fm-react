import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Layout from "./screens/Layout";
import NoPage from "./screens/NoPage";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
