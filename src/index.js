import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from "./serviceWorker";
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
    Header,
    PageNotFound,
    Home,
    Contacts,
    Projects,
    Skills,
    Blogs,
    Footer
} from "./script/export";

ReactDOM.render(
    <Router>
        <Header />
        <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
    </Router>,

    document.getElementById("root")
);

//* Initialize Animate On Scroll (Scrolling Effect)
AOS.init();
AOS.refresh();

reportWebVitals();

serviceWorker.unregister();