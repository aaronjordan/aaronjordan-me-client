import React, { Component } from 'react';

import ProjectItem from './ProjectItem';
import gmImg from '../img/chevrolet.png';
import maImg from '../img/mazlinaaroncom.png';
import fcImg from '../img/fcPortal.png';
import imcImg from '../img/imcSplash.png';
import audImg from '../img/audioessay.png';

import projectJSON from '../projectData.json';
import '../styles/bodyComponent.scss';

class Projects extends Component {
  render() {

    let projectData = [...projectJSON];
    // 10/10/21: I know now - this is an awful way to assign images.
    // TODO: refactor this.
    projectData[0].image = gmImg;
    projectData[1].image = maImg;
    projectData[2].image = fcImg;
    projectData[3].image = imcImg;
    projectData[4].image = audImg;

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