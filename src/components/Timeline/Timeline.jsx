import React from 'react';
import './Timeline.css'

function Timeline(props) {
  return (
      <div className='timeline-card-container'>
        <div className="main-display">
          <div className='timeline-img-container'>
            <img src={props.img} alt={props.alt} className='timeline-img'/>
          </div>
          <h2>{props.year}</h2>
        </div>
        <div id="timeline-description">     
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        </div> 
      </div>
  );
}

export default Timeline;