import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Homepage() {
  const navigate = useNavigate();
  const user = localStorage.getItem('user'); // check login
  const [homes, setHomes] = useState([
    { id: 1, name: 'Cozy Cottage', price: 250000, saved: false },
    { id: 2, name: 'Downtown Apartment', price: 400000, saved: false },
    { id: 3, name: 'Suburban Home', price: 320000, saved: false },
  ]);

  const handleSave = (id) => {
    if (!user) {
      alert('You must be logged in to save homes.');
      navigate('/'); // redirect to login if not logged in
      return;
    }

    const updatedHomes = homes.map((home) =>
      home.id === id ? { ...home, saved: !home.saved } : home
    );
    setHomes(updatedHomes);

    localStorage.setItem('savedHomes', JSON.stringify(updatedHomes.filter(h => h.saved)));
  };

  return (
    <div className="container mt-5">
      <h1>Browse Homes on HomeQuest</h1>
      <p>{user ? `Welcome back, ${user}!` : 'Browse freely — log in to save your favorites.'}</p>

      <div className="row">
        {homes.map((home) => (
          <div key={home.id} className="col-md-4 mb-3">
            <div className="card p-3 shadow-sm">
              <h5>{home.name}</h5>
              <p>Price: ${home.price.toLocaleString()}</p>
              <button
                className={`btn ${home.saved ? 'btn-success' : 'btn-outline-secondary'}`}
                onClick={() => handleSave(home.id)}
              >
                {home.saved ? 'Saved' : 'Save Home'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
