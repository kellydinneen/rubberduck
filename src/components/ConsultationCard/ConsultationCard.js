import React, { useState } from 'react';
import './ConsultationCard.css';

const ConsultationCard = (props) => {
  const {prescriptionStatus, setPrescriptionStatus} = useState('');
  const {reflection, setPrescriptionReflection} = useState('');

  return (
    <article className='sticking-point-card'>
      <section className='sticking-point-card-heading'>
        <h3>{props.problemType}</h3>
        <h3>{props.date}</h3>
      </section>
      <p>{props.vent}</p>
      <h3>The duck prescribed: {props.prescription}</h3>
      <label>
      I tried out the duck's advice
        <select value={prescriptionStatus} onChange={event => setPrescriptionStatus(event.target.value)}>
          <option value="fulfilled">no</option>
          <option value="ignored">yes</option>
        </select>
      </label>
      <label>
        How'd it go?
         <textarea value={reflection} onChange={event => setReflection(event.target.value)} />
      </label>}
    </article>
  )
}

export default ConsultationCard;
