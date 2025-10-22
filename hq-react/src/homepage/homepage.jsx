import React from 'react';

export function Homepage({ userName }) {
  const [listings] = React.useState([
    { id: 1, title: 'Cozy Cottage', price: 250000 },
    { id: 2, title: 'Downtown Loft', price: 420000 },
    { id: 3, title: 'Suburban Home', price: 375000 },
  ]);
  const [saved, setSaved] = React.useState(() => JSON.parse(localStorage.getItem('savedHomes')) || []);

  function saveHome(home) {
    const updated = [...saved, home];
    setSaved(updated);
    localStorage.setItem('savedHomes', JSON.stringify(updated));
  }

  return (
    <div>
      <h2>Welcome {userName || 'Guest'}!</h2>
      <h4>Available Listings</h4>
      <div className="list-group">
        {listings.map((home) => (
          <div key={home.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>{home.title} - ${home.price.toLocaleString()}</div>
            <button className="btn btn-success btn-sm" onClick={() => saveHome(home)}>Save</button>
          </div>
        ))}
      </div>
    </div>
  );
}
