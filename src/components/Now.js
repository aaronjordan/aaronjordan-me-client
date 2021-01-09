import React from 'react';
import '../styles/bodyComponent.scss';

const Now = () => {
  return (
    <main className="content">
      <section className="card">
        <h1>What I'm Doing Now</h1>
        <p>
          I'm in Austin, Texas, living out my long-standing dream of being a hipster cowboy. I have been given a great learning opportunity though my work as a frontend developer at General Motors and have fallen in love with the city of Austin.
        </p><p>
          My goal moving forward is to continue steadily improving as a developer and as an individual. I hope that each day, I learn something meaningful from the last.
        </p><p>To support this goal, this is what I spend my time doing:
        </p>
        <ul className="space">
          <li>Being a stable support and faithful boyfriend to Mazlin Massey</li>
          <li>Being a helpful and present team member with my current role at GM as well as my freelance contracts</li>
          <li>Serving the Austin Stone church through my technical skills, mostly in the realm of audio technology</li>
          <li>Working on personal projects to build experience with the technologies I'm interested in</li>
          <li>Playing and listening to music to express myself and keep my sanity</li>
          <li>Journaling to better understand myself as well as my aspirations and hopes</li>
        </ul>
        <p><strong>These are my main priorities right now.</strong> I'm always open to exploring new things and ideas, but I stick to this list about 80% of the time. These are the things that are most important to me.</p>
        <p className="ctr">As my priorities change and come into focus, I update this list.<br />The most recent update was on January 9, 2021.</p>
        <p className="footnote">This list was inspired by <a href="https://youtu.be/XgH3b-LY1uc" style={{color:'inherit'}} target="_blank" rel="noopener noreferrer">a video from Thomas Frank,</a> a productivity guru.</p>
      </section>
    </main>
  );
}

export default Now;