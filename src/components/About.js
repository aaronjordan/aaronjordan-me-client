import React from 'react';

import Collage from './Collage';
import '../styles/bodyComponent.scss';

const About = () => {
  return (
    <main className="content">
      <section className="card">
        <h1>About</h1>
        <p>I am a software developer in Austin, Texas, originally from the Myrtle Beach area of South Carolina. In 2020, I completed a B.S. in Computer Science, after which I have had a great opportunity to come work at General Motors. There, I am a frontend software developer working mainly with React and Node.js.</p>
        <p>Working with GM, I have built a great understanding of the JavaScript programming language and modern web development as a whole. Through many sprints, stories, and bugs worked with the ecommerce team, I can confidently say that honing my ability to break down problems, as well as identify, evaluate, and implement possible solutions has been key to my success at GM.</p>
        <p>Before my career at GM, I did freelance web development in my spare time for several years. Over that experience, I supported several clients with varied needs, often in LAMP / Wordpress environments. In this time, I also began to experiment with modern tech stacks, including some of the libraries I would eventually use daily at GM. For example, this website is built in React, uses SASS stylesheets, and is served by Express on Node.js through an NGINX reverse proxy.</p>
        <p>Outside of tech, I've had some wild times like leading the worship band for Baptist Collegiate Ministry during my senior year, running lights for the Plain White T's, hosting a radio show, and working on audio productions anywhere from mixing in honky-tonk bars to recording the Greenville Symphony Orchestra. I love music, Formula One racing, rich coffees, and working on cars. Also, I enjoy nature photography, as displayed below.</p>
        <Collage />
      </section>
    </main>
  );
}

export default About;