import React, { useEffect } from 'react';
import ConsultationCard from '../ConsultationCard/ConsultationCard';
import './History.css';

const History = (props) => {

  const pastConsultations = props.data;
  const stickingPointCards = pastConsultations.map(consultation =>
    <ConsultationCard data={consultation}/>
  )

  return (
    {stickingPointCards}
  )
}

export default History;
