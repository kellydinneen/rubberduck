import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = (props) => {
  return (

    <footer>
      <Link to='/about'>About</Link>
      <section className='dev-info'>
        <p className='dev-name'>Kelly Dinneen</p>
      </section>
    </footer>
  )
}

export default Footer;
