import React, { Component } from 'react';
import { CloseIcon } from '@patternfly/react-icons';

import photo1 from '../img/pin1.jpg';
import photo2 from '../img/pin2.jpg';
import photo3 from '../img/pin3.jpg';

import '../styles/Collage.scss';

// add new images ONCE here.
const photos = [photo1, photo2, photo3];

class Collage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalActive: false,
      modalClass: 'img-modal-about hide',
      modalSrc: '',
      activePhoto: 0
    }
    this.clicked = this.collageClick.bind(this);
  }


  collageClick(e, idx) {
    let display = (!this.state.modalActive) ? 'show' : 'hide';
    this.setState({
      ...this.state, 
      modalActive: !this.state.modalActive, 
      modalClass: `img-modal-about ${display}`, 
      activePhoto: idx, 
    });
  }

  render() {

    const gallery = photos.map((image, i) => {
      return (
        <img src={image} key={i} alt="mountains" onClick={e => this.collageClick(e, i)}/>
      );
    });

    return (
      <section className="collage">
        { gallery }
        <section className={this.state.modalClass} onClick={e => this.collageClick(e)}>
          <CloseIcon className="closer" />
          <img src={photos[this.state.activePhoto]} alt='photography modal'/>
        </section>
      </section>
    );
  }
}

export default Collage;