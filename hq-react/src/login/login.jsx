import React from 'react';
// import './app.css';

export function Login() {
  return (
    <main>
      <h1>Welcome to HomeQuest</h1>
      <form onsubmit="return false">
        <div>
          <span>Username or Email</span>
          <input type="text" id="username" placeholder="type here" />
        </div>
        <div>
          <span>Password</span>
          <input type="password" id="password" placeholder="type here" />
        </div>
        <button type="button" onclick="loginUser()">Login</button>
        <button type="submit">Create</button>
      </form>
    </main>
  );
}