import React, {Component} from 'react';
import Profile from '../img/aaronNY.JPG';
import { AngleRightIcon } from '@patternfly/react-icons';
import '../styles/Hero.scss';

class Hero extends Component {

  constructor(props) {
    super(props);
    this.state = {
      idx: 0,
      saying: [
        "I develop software.",
        "I mostly do front-end development.",
        "My first programming language was C.",
        "In college, I learned the fundamentals of computing and OO programming.",
        "More than anything, I enjoy working with frameworks like React and Angular.",
        "Have a look below for more detail on my experience!",
        "Yes, my family usually has me fix the WiFi.",
        "Yes, people do call me A-A-Ron.",
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let { idx } = this.state;
    idx++;
    if(idx === this.state.saying.length)
      this.setState({...this.state, idx: 0});
    else
      this.setState({...this.state, idx: idx});
  }

  render() {
    return (
      <section className="hero">
          <div className="inner">
            <img src={Profile} alt="aaron-profile" />
            <div className="headline">
              <h1>Hey there! I'm Aaron Jordan.</h1>
              <p>{this.state.saying[this.state.idx]}</p>
              <AngleRightIcon className="spin" onClick={this.handleClick} size="lg"/>
            </div>
            <div className="glowHelper"></div>
        </div>
      </section>
    );
  }
}

export default Hero;