import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './script.js';
import './libraries.js';
// import App from './App';
import * as serviceWorker from "./serviceWorker";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  Navigation,
  Footer,
  Home,
  Contacts,
  Projects,
  Skills
} from "./components";

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
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();

reportWebVitals();