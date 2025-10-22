import React from 'react';

export function About() {
  const [info, setInfo] = React.useState('Loading...');
  React.useEffect(() => {
    setTimeout(() => setInfo('HomeQuest helps you discover and save homes you love.'), 500);
  }, []);
  return (
    <div>
      <h2>About HomeQuest</h2>
      <p>{info}</p>
    </div>
  );
}
