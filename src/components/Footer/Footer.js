import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = (props) => {
  return (

    <footer>
      <Link to='/about'>About</Link>
      <section className='dev-info'>
        <p className='dev-name'>Kelly Dinneen</p>
        <a href='https://github.com/kellydinneen' target="_blank" rel="noreferrer">
          <img className='gh-logo' alt='GitHub Logo' src={gHLogo}/>
        </a>
        <a href='https://www.linkedin.com/in/kellydinneen/' target="_blank" rel="noreferrer">
          <img className='linkedin-logo' alt='LinkedIn Logo' src={linkedInLogo}/>
        </a>
      </section>
    </footer>
  )
}

export default Footer;
