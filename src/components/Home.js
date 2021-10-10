import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Hero from './Hero';
import StackGraphic from './StackGraphic';
import ProjectItem from './ProjectItem';

import projectJSON from '../projectData.json';
import gmImg from '../img/chevrolet.png';
import maImg from '../img/mazlinaaroncom.png';
import '../styles/bodyComponent.scss';

class Home extends Component {

  render() {

    let projectData = [...projectJSON];
    projectData[0].image = gmImg;
    projectData[1].image = maImg;

    return (
      <main className="content home">
        <Hero />
        <article className="card">
          <Link className="flyingLink" to="/about">More</Link>
          <h1>About<span className="subtle">(quickly)</span></h1>
          <p>I am a software developer in Austin, Texas, originally from the Myrtle Beach area of South Carolina. In 2020, I completed a B.S. in Computer Science, after which I have had a great opportunity to come work at General Motors. There, I am a frontend software developer working mainly with React and Node.js.</p>
          <StackGraphic />
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