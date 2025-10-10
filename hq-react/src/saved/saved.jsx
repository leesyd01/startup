import React from 'react';
// import './app.css';

export function Saved() {
  return (
    <main>
      <h2>Your Saved Items</h2>
      {/* <!-- Placeholder: Database-backed saved items --> */}
      <ul id="savedList"></ul>
      <li>Loading your saved listings from the database...</li>
    </main>
  );
}