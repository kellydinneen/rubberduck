import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = (props) => {
  return (
    <header>
      {props.home && <h1 className='title'>Rubberduck</h1>}
      {!props.home &&
        <>
          <Link className='home-button' to='/'>
            Home
          </Link>
        </>
      }
    </header>
  )
}

export default Header;
