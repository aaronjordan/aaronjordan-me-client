import React from 'react';
import { GithubIcon, 
         InstagramIcon, 
         SpotifyIcon, 
         LinkedinIcon 
       } from '@patternfly/react-icons';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="social">
          <a href="https://github.com/aaronjordan" target="_blank" rel="noopener noreferrer"><GithubIcon size="md" /></a>
          <a href="https://www.linkedin.com/in/heyitsaaronjordan/" target="_blank" rel="noopener noreferrer"><LinkedinIcon size="md" /></a>
          <a href="https://www.instagram.com/heyitsaaronjordan/" target="_blank" rel="noopener noreferrer"><InstagramIcon size="md" /></a>
          <a className="green" href="https://open.spotify.com/playlist/4Od1qwCSuzCLwk5u05ceLa?si=O77pb_W2RlmP8CsSjqox-g" target="_blank" rel="noopener noreferrer"><SpotifyIcon size="md" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

