import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = (props) => {
  return (
    <header>
      {props.home && <h1 className='site-title'>Rubberduck</h1>}
      {!props.home &&
        <>
          <Link to='/'>
            <button className='home-button'>Go Home</button>
          </Link>
        </>
      }
    </header>
  )
}

export default Header;
