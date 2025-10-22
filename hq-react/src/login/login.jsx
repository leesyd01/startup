import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.trim() !== '' && password.trim() !== '') {
      localStorage.setItem('user', username);
      navigate('/homepage');
    } else {
      setError('Please enter a valid username and password');
    }
  };

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Welcome to HomeQuest</h2>
      <form onSubmit={handleLogin} className="d-flex flex-column align-items-center gap-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="form-control w-50"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn btn-secondary mt-3 w-25">
          Log In
        </button>

        {error && <p className="text-danger mt-2">{error}</p>}
      </form>
    </div>
  );
}
