import React from 'react';

export function Saved() {
  const [savedHomes, setSavedHomes] = React.useState([]);

  React.useEffect(() => {
    async function loadFavorites() {
      try {
        const res = await fetch('/api/favorites', {
          credentials: 'include'
        });

        if (!res.ok) {
          console.error("Failed to load favorites");
          return;
        }

        const data = await res.json();
        setSavedHomes(data);
      } catch (err) {
        console.error("Error fetching favorites:", err);
      }
    }

    loadFavorites();
  }, []);

  async function clearSaved() {
    // Optional: clear all favorites in DB
    // For now, just clear UI
    setSavedHomes([]);
  }

  return (
    <div>
      <h2>Your Saved Homes</h2>
      {savedHomes.length === 0 ? (
        <p>No saved homes yet.</p>
      ) : (
        <ul className="list-group">
          {savedHomes.map((home, i) => (
            <li key={i} className="list-group-item">
              {home.title} - ${home.price.toLocaleString()}
            </li>
          ))}
        </ul>
      )}
      <button className="btn btn-danger mt-3" onClick={clearSaved}>
        Clear Saved Homes
      </button>
    </div>
  );
}
