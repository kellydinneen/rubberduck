import React from 'react';
import { Link } from "react-router-dom";
import './Prescription.css';

const Prescription = (props) => {
  console.log(props.location. props.location.state);
  const [loading, setLoading] = useState(true);

  return (
    <section>
      <h4>Well, I think what you need to try is</h4>
      <h3>title</h3>
      <h3>content</h3>
      <button>Learn More</button>
      <button>Start Over</button>
    </section>
  )
}

export default Prescription;
