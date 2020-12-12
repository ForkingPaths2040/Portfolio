import React from 'react';
import './Projects.css'
import pointual from "../../assets/images/pointual.png";

function Projects(props) {
  return (
    <div>
      <img className="pointual" src={pointual} />
      <div>
        <h3>Pointual</h3>
        <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit pariatur culpa, quae dolore dicta, mollitia fuga veniam est, totam delectus dolores dolorem dolor velit officiis quidem maiores sequi laboriosam eius.</p>
      </div>
    </div>
  );
}

export default Projects;