import React from 'react';

export function Login({ onLogin }) {
  const [name, setName] = React.useState('');

  function handleLogin(e) {
    e.preventDefault();
    localStorage.setItem('userName', name);
    onLogin(name);
  }

  return (
    <div className="text-center">
      <h2>Welcome to HomeQuest</h2>
      <form onSubmit={handleLogin} className="d-flex flex-column align-items-center">
        <input
          className="form-control w-50 my-2"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}
