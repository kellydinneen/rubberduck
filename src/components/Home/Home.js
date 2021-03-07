import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Duck from '../Duck/Duck';
import './Home.css';

const Home = (props) => {

  return (
    <main>
      <Duck />
    </main>
  )
}

export default Home;
