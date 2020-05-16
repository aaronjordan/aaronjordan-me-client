import React from 'react';
import '../styles/bodyComponent.scss';

const Now = () => {
  return (
    <main className="content">
      <section className="card">
        <h1>What I'm Doing Now</h1>
        <p>
          I'm in Conway, South Carolina, wrapping up my Bachelors' Degree in Computer Science. I'm searching for opportunities in software development, where I'll shift my priorities accordingly. For now, I'm trying to close out this chapter well by honoring the commitments I have here and doing my best to train the new guys where needed.
        </p><p>
          My hope with moving is to find a stable community where I can apply my software development skills and continue learning. I'm hopeful to find good opportunities to continue exploring my interests, from application and web development to digital audio processing.
        </p><p>To support my goal, this is what I spend my time doing:
        </p>
        <ul className="space">
          <li>Being a supportive and present team member with my current jobs and freelance contracts</li>
          <li>Serving faithfully with the church I am a part of and preparing to move away from</li>
          <li>Passing on whatever skills I can to the people I work with as I approach my moving date</li>
          <li>Researching web technologies and frameworks to broaden my understanding of the options available</li>
          <li>Working on personal projects to build expreience with the technologies I'm interested in</li>
          <li>Playing and listening to music to express myself and keep my sanity</li>
          <li>Journaling to better understand myself as well as my aspirations and hopes</li>
        </ul>
        <p><strong>These are my main priorities right now.</strong> I'm always open to exploring new things and ideas, but I stick to this list about 80% of the time. These things are what's most important to me.</p>
        <p className="ctr">As my priorities change and come into focus, I update this list.<br />The most recent update was on May 9, 2020.</p>
        <p className="footnote">This list was inspired by <a href="https://youtu.be/XgH3b-LY1uc" style={{color:'inherit'}} target="_blank" rel="noopener noreferrer">a video from Thomas Frank,</a> a productivity guru.</p>
      </section>
    </main>
  );
}

export default Now;