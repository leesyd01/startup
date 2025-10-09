import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Homepage } from './homepage/homepage';
import { Saved } from './saved/saved';
import { About } from './about/about';

export default function App() {
  return <div className="body bg-dark text-light">App will display here</div>;
  <><footer>
        <hr />
        <span className="text-reset">Author Name(s)</span>
        <br />
        <a href="https://github.com/leesyd01/startup.git">GitHub</a>
    </footer><nav>
            <menu>
                <li><a href="index.html">Login</a></li>
                <li><a href="homepage.html">Home Page</a></li>
                <li><a href="saved.html">Saved</a></li>
                <li><a href="about.html">About Us</a></li>
            </menu>
        </nav></>

}