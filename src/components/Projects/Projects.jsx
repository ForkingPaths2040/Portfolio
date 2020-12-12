import React from 'react';
import './Projects.css'
import pointual from "../../assets/images/pointual.png";

function Projects(props) {
  return (
    <>
    <div className="project-container">
      <img className="pointual" src={pointual} />
      <div className="description-container">
        <h3>Pointual</h3>
        <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit pariatur culpa, quae dolore dicta, mollitia fuga veniam est, totam delectus dolores dolorem dolor velit officiis quidem maiores sequi laboriosam eius.</p>
      </div>
      </div>
      <h1 className="page-title">WORK PAGE</h1>
    </>
  );
}

export default Projects;