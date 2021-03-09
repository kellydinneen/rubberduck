import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Duck from '../Duck/Duck';
import './Home.css';

const Home = () => {

  return (
    <main>
      <h2>Hello, can I be your rubberduck?</h2>
      <Link to='/form'>
        <button>Yes</button>
      </Link>
      <Duck />
    </main>
  )
}

export default Home;
