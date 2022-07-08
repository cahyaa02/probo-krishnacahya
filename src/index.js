import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from "./serviceWorker";
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
    PageNotFound,
    Home,
    Contacts,
    Projects,
    Skills,
    Blogs
} from "./script/export";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Router>
        <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/blogs" element={<Blogs />} />
        </Routes>
    </Router>
);

//* Initialize Animate On Scroll (Scrolling Effect)
AOS.init();
AOS.refresh();

reportWebVitals();

serviceWorker.unregister();