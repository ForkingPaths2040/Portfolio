import React from 'react';
import Projects from '../Projects/Projects';
import './Works.css'


function Works(props) {
  return (
    <div className="works-container" id='work'>
      <div className="diagonal-container">
        <div className="diagonal" id="d1"></div>
        <div className="diagonal" id="d2"></div>
        <div className="diagonal" id="d3"></div>
      </div>
      <Projects />
    </div>
  );
}

export default Works;