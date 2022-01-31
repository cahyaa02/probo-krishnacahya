import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './scripts/script.js';
// import App from './App';
import * as serviceWorker from "./serviceWorker";
import reportWebVitals from './reportWebVitals';
import { Tooltip } from 'bootstrap';
import AOS from 'aos';
import "aos/dist/aos.css";
import Typewriter from 'typewriter-effect/dist/core';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
    Navigation,
    Home,
    Contacts,
    Projects,
    Skills
} from "./scripts/export";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
    <Router>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            {/* <Route path="/blogs" element={<Blogs />} /> */}
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
    .typeString('DevOps Engineer').pauseFor(3000).deleteAll(30)
    .start();

serviceWorker.unregister();

reportWebVitals();