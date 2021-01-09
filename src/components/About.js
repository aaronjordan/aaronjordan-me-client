import React from 'react';

import Collage from './Collage';
import '../styles/bodyComponent.scss';

const About = () => {
  return (
    <main className="content">
      <section className="card">
        <h1>About</h1>
        <p>I am a software developer from Pawleys Island, South Carolina, currently living in Austin, Texas. I recently completed a B.S. in Computer Science, after which I was given a great opportunity to come work and learn at General Motors. There, I am a frontend software developer working mainly with React.</p>
        <p>I've done freelance web development in my spare time over the past few years. In that time, I've supported several clients with varied needs, often in LAMP / Wordpress environments. However, when left to create on my own, I use a modern tech stack. For example, this website is built in React, uses SASS stylesheets, and is served by Express on Node.js through an NGINX reverse proxy.</p>
        <p>Additionally, I've had some wild times like leading the worship band for Baptist Collegiate Ministry during my senior year, running lights for the Plain White T's, hosting a radio show, and working on audio productions anywhere from mixing in honky-tonk bars to recording the Greenville Symphony Orchestra. I love music, Formula One racing, rich coffees, and working on cars. Also, I enjoy nature photography, as displayed below.</p>
        <Collage />
      </section>
    </main>
  );
}

export default About;