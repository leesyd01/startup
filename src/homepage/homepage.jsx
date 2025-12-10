import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Homepage() {
  const navigate = useNavigate();
  const user = localStorage.getItem('email'); // user email stored at login
  const [homes, setHomes] = useState([]);
  const [quote, setQuote] = useState('');
  const [favorites, setFavorites] = useState([]);

  // Load listings + saved favorites on page load
  useEffect(() => {
    loadListings();
    loadFavorites();
    loadQuote();
  }, []);

  // Fetch property listings
  async function loadListings() {
    try {
      const res = await fetch('/api/listings');
      const data = await res.json();
      setHomes(data);
    } catch (err) {
      console.error('Error loading listings:', err);
    }
  }

  // Fetch user's favorites from backend
  async function loadFavorites() {
    try {
      const res = await fetch('/api/favorites', {
        credentials: "include",
      });

      if (res.ok) {
        const favs = await res.json();
        setFavorites(favs);
      }
    } catch (err) {
      console.error('Error loading favorites:', err);
    }
  }

  // Load inspirational quote
  async function loadQuote() {
    try {
      const res = await fetch('https://api.quotable.io/random');
      const data = await res.json();
      setQuote(`"${data.content}" — ${data.author}`);
    } catch (err) {
      console.error('Error fetching quote:', err);
    }
  }

  // Save / Unsave homes
  async function toggleFavorite(home) {
    if (!user) {
      alert('You must be logged in to save homes.');
      navigate('/');
      return;
    }

    try {
      const res = await fetch("/api/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(home),
      });

      if (res.ok) {
        const updated = await res.json();
        setFavorites(updated);  // update favorites state
      }
    } catch (err) {
      console.error('Error saving favorite:', err);
    }
  }

  // Helper to check if home is saved
  const isSaved = (id) => favorites.some(f => f.id === id);

  return (
    <div className="container mt-5">
      <h1>Browse Homes on HomeQuest</h1>
      <h4 className="text-muted mt-2">{quote}</h4>

      <div className="row mt-4">
        {homes.map((home) => (
          <div key={home.id} className="col-md-4 mb-3">
            <div className="card p-3 shadow-sm">
              <h5>{home.title}</h5>
              <p>Price: ${home.price.toLocaleString()}</p>

              <button
                className={`btn ${isSaved(home.id) ? 'btn-success' : 'btn-outline-secondary'}`}
                onClick={() => toggleFavorite(home)}
              >
                {isSaved(home.id) ? 'Saved' : 'Save Home'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
