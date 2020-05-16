import React, { Component } from 'react';
import { 
  GithubIcon, 
  // VimeoIcon, -- to be used later
  ArrowCircleRightIcon, 
  ArrowAltCircleDownIcon,
  BookOpenIcon,
  CloseIcon
 } from '@patternfly/react-icons';
 
 import '../styles/projectItem.scss';

 class ProjectItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalActive: false,
      modalClass: 'img-modal hide',
      modalSrc: '',
    }
    this.clicked = this.clicked.bind(this);
  }

  clicked(e) {
    let display = (!this.state.modalActive) ? 'show' : 'hide';
    this.setState({...this.state, modalActive: !this.state.modalActive, modalClass: `img-modal ${display}` });
  }

  render() {
    const { name, company, text, image, links, caption } = this.props.data;
    const icons = Object.keys(links);
    const cardClass = (this.props.card) ? 'card' : ''

    return (
      <article className={(this.props.rightText === true) ? `project flexleft ${cardClass}` : `project flexright ${cardClass}`}>
        <img src={image} alt={`${company} project`} onClick={e => this.clicked(e)}/>
        <div className="project-text">
          <h2>{name}
            { icons.find(cur => cur === 'extlink') && links.extlink &&
              <a href={links.extlink} target="_blank" rel="noopener noreferrer" className="ico r45"><ArrowCircleRightIcon size="sm"/></a>
            }
            { //icons.find(cur => cur === 'vimeo') && links.vimeo &&
              //<a href={links.vimeo} target="_blank" rel="noopener noreferrer" className="ico"><VimeoIcon size="sm"/></a>
            }
            { icons.find(cur => cur === 'github') && links.github &&
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="ico"><GithubIcon size="sm"/></a>
            }
            { icons.find(cur => cur === 'download') && links.download &&
              <a href={links.download} target="_blank" rel="noopener noreferrer" className="ico"><ArrowAltCircleDownIcon size="sm"/></a>
            }
            { icons.find(cur => cur === 'read') && links.read &&
              <a href={links.read} target="_blank" rel="noopener noreferrer" className="ico"><BookOpenIcon size="sm"/></a>
            }
            <span className="sub">{company}</span>
          </h2>
          <p>{text}</p>
        </div>
        <section className={this.state.modalClass} onClick={e => this.clicked(e)}>
          <CloseIcon className="closer" />
          <img src={image} alt='modal'/>
          <p>{caption}</p>
        </section>
      </article>
    )
  }
}

export default ProjectItem;