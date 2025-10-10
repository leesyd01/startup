import React from 'react';
// import './app.css';

export function About() {
  return (
    <main>
      <div id="picture" class="picture-box">
        <img width="400px" src="homequest-images/college-moving.png" alt="college-moving" />
      </div>

      <p>
        Here at HomeQuest, you can select the housing that you need to be successful.
      </p>

      {/* <!-- Placeholder: 3rd Party Service (Yelp API) --> */}
      <section id="reviews">
        <h2>User Reviews (from 3rd party service)</h2>
        <p>Fetching reviews...</p>
      </section>

      <div id="quote">
        <div>Insert online reviews here</div>
        <div>- Insert First Name, Last Initial, Location here</div>
      </div>
    </main>
  );
}