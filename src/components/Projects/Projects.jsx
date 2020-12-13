import React from 'react';
import './Projects.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import pointual from '../../assets/images/pointualDetail.png'
import progression from '../../assets/images/progressionTricks.png'
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faHtml5, faCss3, faReact } from '@fortawesome/free-brands-svg-icons'
import { faTrain, faServer, faKey } from "@fortawesome/free-solid-svg-icons";


function Projects(props) {
  return (
    <>
      <div className="project-container">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
            <Slide index={0}>
              <div className="project-feature">
                <div className="project-icons">
                  <a href="https://github.com/ForkingPaths2040/Pointual" target="_blank"><GitHubIcon style={{ fontSize: "32px" }}/></a>
                  <a href="https://pointual.netlify.app/login" target="_blank"><LaunchIcon style={{ fontSize: "32px" }}/></a>
                </div>
                <img className="project-img" src={pointual} />
                </div>
      <div className="description-container">
        <h3>Pointual <span id="project-label">| Full Stack via React on Rails</span></h3>
        <p className="project-description">A full-stack productivity tool that allows users to track points against a time and attendance policy.</p>
        <div className="toolkit-icons">
                  <FontAwesomeIcon icon={faJsSquare} size="2x" style={{ color: "rgb(143, 143, 143)" }}/>
                  <FontAwesomeIcon icon={faHtml5} size="2x"  style={{ color: "rgb(143, 143, 143)" }}/>
                  <FontAwesomeIcon icon={faCss3} size="2x" style={{ color: "rgb(143, 143, 143)" }}/>
                  <FontAwesomeIcon icon={faReact} size="2x" style={{ color: "rgb(143, 143, 143)" }}/>
                  <FontAwesomeIcon icon={faTrain} size="2x" style={{ color: "rgb(143, 143, 143)" }}/>
                  <FontAwesomeIcon icon={faServer} size="2x" style={{ color: "rgb(143, 143, 143)" }}/>
                  <FontAwesomeIcon icon={faKey} size="2x" style={{ color: "rgb(143, 143, 143)" }}/>
                  
        </div>
              </div>
          </Slide>
          <Slide index={1}>
      <img className="project-img" src={progression} />
      <div className="description-container">
        <h3>Progression</h3>
        <p className="project-description">Amber ipsum dolor sit amet, consectetur adipisicing elit. Odit pariatur culpa, quae dolore dicta, mollitia fuga veniam est, totam delectus dolores dolorem dolor velit officiis quidem maiores sequi laboriosam eius.</p>
      </div>
          </Slide>
          </Slider>
          <div className="page-buttons">
            <ButtonBack className="carousel-button"><ChevronLeftIcon/></ButtonBack>
            <ButtonNext className="carousel-button"><ChevronRightIcon/></ButtonNext>
            </div>
      </CarouselProvider>
      </div>
      <h1 className="page-title">WORK &nbsp; PAGE</h1>
    </>
  );
}

export default Projects;