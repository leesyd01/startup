import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Homepage } from './homepage/homepage';
import { Saved } from './saved/saved';
import { About } from './about/about';

export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');

  return (
    <BrowserRouter>
      <div className="body bg-light text-dark min-vh-100 d-flex flex-column">
        <header className="container-fluid">
          <nav className="navbar fixed-top navbar-dark bg-secondary">
            <div className="navbar-brand">HomeQuest<sup>&reg;</sup></div>
            <menu className="navbar-nav d-flex flex-row gap-3">
              <li className="nav-item"><NavLink className="nav-link" to="">Login</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="homepage">Home Page</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="saved">Saved</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="about">About Us</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/" onClick={() => { localStorage.removeItem('user'); }}>Logout</NavLink></li>
            </menu>
          </nav>
        </header>

        <main className="flex-fill mt-5 pt-4 container">
          <Routes>
            <Route path="/" element={<Login onLogin={setUserName} />} exact />
            <Route path="/homepage" element={<Homepage userName={userName} />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="bg-secondary text-white-50 mt-auto py-3">
          <div className="container-fluid text-center">
            <span>Sydney Lee</span><br/>
            <a className="text-reset" href="https://github.com/leesyd01/startup.git" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );

  function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
  }
}
