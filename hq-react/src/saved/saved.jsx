import React from 'react';

export function Saved() {
  const [savedHomes, setSavedHomes] = React.useState([]);

  React.useEffect(() => {
    const homes = JSON.parse(localStorage.getItem('savedHomes')) || [];
    setSavedHomes(homes);
  }, []);

  function clearSaved() {
    localStorage.removeItem('savedHomes');
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
            <li key={i} className="list-group-item">{home.title} - ${home.price.toLocaleString()}</li>
          ))}
        </ul>
      )}
      <button className="btn btn-danger mt-3" onClick={clearSaved}>Clear Saved Homes</button>
    </div>
  );
}
