import React, { useState } from 'react';
import './ConsultationCard.css';

const ConsultationCard = (props) => {
  const {prescriptionStatus, setPrescriptionStatus} = useState('');
  const {reflection, setPrescriptionReflection} = useState('');
  const data = props.data;

  return (
    <article className='sticking-point-card'>
      <section className='sticking-point-card-heading'>
        <h3>{data.problemType}</h3>
        <h3>{data.date}</h3>
      </section>
      <p>{data.vent}</p>
      <h3>The duck prescribed: {data.prescription}</h3>
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
