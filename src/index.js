import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from "./serviceWorker";
import { Tooltip } from 'bootstrap';
import AOS from 'aos';
import "aos/dist/aos.css";
import Typewriter from 'typewriter-effect/dist/core';
import './index.css';
import './scripts/script.js';
import {
    Navigation,
    PageNotFound,
    Home,
    Contacts,
    Projects,
    Skills,
    Blogs
} from "./scripts/export";

ReactDOM.render(
    <Router>
        <Navigation />
        <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/blogs" element={<Blogs />} />
        </Routes>
    </Router>,

    document.getElementById("root")
);

//* Enable Bootstrap's Tooltip Everywhere
var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new Tooltip(tooltipTriggerEl);
});

//* Initialize Animate On Scroll (Scrolling Effect)
AOS.init();
AOS.refresh();

//* Setup TypewriterJS (Typewriting Effect)
var typewriting = document.getElementById('typewriting');
var typewriter = new Typewriter(typewriting, {
    delay: 50,
    loop: !0,
    devMode: !0,
    cursorClassName: 'typeCursor'
});
typewriter.typeString('Frontend Developer').pauseFor(3000).deleteAll(30)
    .typeString('UI/UX Designer').pauseFor(3000).deleteAll(30)
    .typeString('DevSecOps Engineer').pauseFor(3000).deleteAll(30)
    .start();

serviceWorker.unregister();

reportWebVitals();