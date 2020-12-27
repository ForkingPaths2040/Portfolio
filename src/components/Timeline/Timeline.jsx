import React from 'react';
import './Timeline.css'

function Timeline(props) {
  return (
    <div className='timeline-container'>
      <h2>{props.year}</h2>
      <img src={props.img} alt={props.alt} className='timeline-img'/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Timeline;