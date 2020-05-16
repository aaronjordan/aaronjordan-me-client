import React from 'react';

import '../styles/bodyComponent.scss';

const Contact = () => {
  return (
    <main className="content">
      <section className="card">
        <p>
          Contact me with any questions, comments, or suggestions!
        </p>
        <p>
          <span className="email">
            <a href="mailto:aaron@impactfulmedia.co">aaron@impactfulmedia.co</a>
          </span>
        </p>
      </section>
    </main>
  );
}

export default Contact;