import React, { Component } from 'react';

import ProjectItem from './ProjectItem';
import fcImg from '../img/fcPortal.png';
import imcImg from '../img/imcSplash.png';
import audImg from '../img/audioessay.png';

import projectJSON from '../projectData.json';
import '../styles/bodyComponent.scss';

class Projects extends Component {
  render() {

    let projectData = [...projectJSON];
    projectData[0].image = fcImg;
    projectData[1].image = imcImg;
    projectData[2].image = audImg;

    const projectList = projectData.map((project, index) => {
      return (
        <ProjectItem key={index} card 
          data={projectData[index]} 
          rightText={ (index % 2) ? false : true } 
        />
      );
    });

    return (
      <main className="content">
        { projectList }        
      </main>
    );
  }
}

export default Projects;