import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Homepage } from './homepage/homepage';
import { Saved } from './saved/saved';
import { About } from './about/about';

export default function App() {
  return (
    <BrowserRouter>
      <div className="body bg-dark text-light min-vh-100 d-flex flex-column">
        {/* Header + Navbar */}
        <header className="container-fluid">
          <nav className="navbar fixed-top navbar-dark bg-dark">
            <div className="navbar-brand">
              HomeQuest<sup>&reg;</sup>
            </div>
            <menu className="navbar-nav d-flex flex-row gap-3">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/homepage">Home Page</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/saved">Saved</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About Us</NavLink>
              </li>
            </menu>
          </nav>
        </header>

        {/* Main Page Content */}
        <main className="flex-fill mt-5 pt-4 container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-dark text-white-50 mt-auto py-3">
          <div className="container-fluid text-center">
            <span className="text-reset">Author Name(s)</span>
            <br />
            <a
              className="text-reset"
              href="https://github.com/leesyd01/startup.git"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
