import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Hero from './Hero';
import StackGraphic from './StackGraphic';
import ProjectItem from './ProjectItem';

import projectJSON from '../projectData.json';
import fcImg from '../img/fcPortal.png';
import imcImg from '../img/imcSplash.png';
import '../styles/bodyComponent.scss';

class Home extends Component {

  render() {

    let projectData = [...projectJSON];
    projectData[0].image = fcImg;
    projectData[1].image = imcImg;

    return (
      <main className="content home">
        <Hero />
        <article className="card">
          <Link className="flyingLink" to="/about">More</Link>
          <h1>About<span className="subtle">(quickly)</span></h1>
          <p>I am a software developer from Pawleys Island, South Carolina, currently living in Austin, Texas. I recently completed a B.S. in Computer Science, after which I was given a great opportunity to come work and learn at General Motors. There, I am a frontend software developer working mainly with React.</p>          <StackGraphic />
        </article>
        <article className="card">
        <Link className="flyingLink" to="/projects">More</Link>
          <h1>Featured Projects</h1>
          <ProjectItem data={projectData[0]} rightText />
          <ProjectItem data={projectData[1]} />
        </article>
      </main>
    );
  }
}

export default Home;