import React from 'react';
// import './app.css';

export function Homepage() {
  return (
    <main>
      {/* <!-- Placeholder: 3rd Party Service API --> */}
      <section id="apiData">
        <h2>Featured Listings (from API)</h2>
        <p>Loading listings from external housing API...</p>
      </section>

      {/* <!-- Placeholder: Housing API --> */}
      <section id="housingResults">
        <h2>Housing Results (from API)</h2>
        <p>No results yet. Enter a ZIP code to see available housing.</p>
      </section>

      {/* <!-- Placeholder: Crime API --> */}
      <section id="crimeResults">
        <h2>Crime Rate (from API)</h2>
        <p>No results yet. Enter a ZIP code to see local crime statistics.</p>
      </section>

      {/* <!-- Placeholder: WebSocket realtime data --> */}
      <section id="liveUpdates">
        <h2>WebSocket Data</h2>
        <ul id="updates">
          <li>Waiting for live updates...</li>
        </ul>
      </section>
    </main>
  );
}