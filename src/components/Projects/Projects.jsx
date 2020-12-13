import React from 'react';
import './Projects.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import pointual from '../../assets/images/pointualDetail.png'
import greenhouse from '../../assets/images/greenhouseHP.png'
import progression from '../../assets/images/progressionTricks.png'
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faHtml5, faCss3, faReact } from '@fortawesome/free-brands-svg-icons'
import { faTrain, faServer, faKey, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import airtable from '../../assets/images/airtable.png'
import HttpIcon from '@material-ui/icons/Http';


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
                  <a href="https://github.com/ForkingPaths2040/Pointual" target="_blank" rel="noreferrer"><GitHubIcon style={{ fontSize: "32px" }}/></a>
                  <a href="https://pointual.netlify.app/login" target="_blank" rel="noreferrer"><LaunchIcon style={{ fontSize: "32px" }}/></a>
                </div>
                <img className="project-img" src={pointual} alt="Pointual webpage screenshot" />
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
              <div className="project-feature">
                <div className="project-icons">
                  <a href="https://github.com/ForkingPaths2040/Progression" target="_blank" rel="noreferrer"><GitHubIcon style={{ fontSize: "32px" }}/></a>
                  <a href="https://progression.netlify.app/" target="_blank" rel="noreferrer"><LaunchIcon style={{ fontSize: "32px" }}/></a>
                </div>
                <img className="project-img" src={progression} alt="Progression webpage screenshot"/>
                </div>
      <div className="description-container">
        <h3>Progression <span id="project-label">| Front End via React with AirTable</span></h3>
        <p className="project-description">A Front End application for skateboarders to quickly glance at a list of tricks, the detail of the trick and the ability to view and submit their progression to the database.</p>
        <div className="toolkit-icons">
                  <FontAwesomeIcon icon={faJsSquare} size="2x" style={{ color: "rgb(143, 143, 143)" }}/>
                  <FontAwesomeIcon icon={faHtml5} size="2x"  style={{ color: "rgb(143, 143, 143)" }}/>
                  <FontAwesomeIcon icon={faCss3} size="2x" style={{ color: "rgb(143, 143, 143)" }}/>
                  <FontAwesomeIcon icon={faReact} size="2x" style={{ color: "rgb(143, 143, 143)" }}/>
                  <FontAwesomeIcon icon={faMobileAlt} size="2x" style={{ color: "rgb(143, 143, 143)" }}/>
                  <HttpIcon style={{ color: "rgb(143, 143, 143)", fontSize:"38px" }}/>
                  <img src={airtable} style={{width:"35px", height:"auto"}} alt="Airtable icon"/>    
        </div>
              </div>
            </Slide>
            <Slide index={2}>
              <div className="project-feature">
                <div className="project-icons">
                  <a href="https://github.com/suttondemlong/green-house" target="_blank" rel="noreferrer"><GitHubIcon style={{ fontSize: "32px" }}/></a>
                  <a href="https://green-house-adirondack-phoenix.netlify.app/" target="_blank" rel="noreferrer"><LaunchIcon style={{ fontSize: "32px" }}/></a>
                </div>
                <img className="project-img" src={greenhouse} alt="Greenhouse webpage screenshot" />
                </div>
      <div className="description-container">
        <h3>GreenHouse <span id="project-label">| Full Stack via React and Express</span></h3>
        <p className="project-description">A collabrative full-stack application with UX designers to implement original mockups of a platform with green-conscious users.</p>
        <div className="toolkit-icons">
                  <FontAwesomeIcon icon={faJsSquare} size="2x" style={{ color: "rgb(143, 143, 143)" }}/>
                  <FontAwesomeIcon icon={faHtml5} size="2x"  style={{ color: "rgb(143, 143, 143)" }}/>
                  <FontAwesomeIcon icon={faCss3} size="2x" style={{ color: "rgb(143, 143, 143)" }}/>
                  <FontAwesomeIcon icon={faReact} size="2x" style={{ color: "rgb(143, 143, 143)" }}/>
                  <FontAwesomeIcon icon={faMobileAlt} size="2x" style={{ color: "rgb(143, 143, 143)" }}/>
                  <FontAwesomeIcon icon={faServer} size="2x" style={{ color: "rgb(143, 143, 143)" }}/>
                  <FontAwesomeIcon icon={faKey} size="2x" style={{ color: "rgb(143, 143, 143)" }}/>
                  
        </div>
              </div>
          </Slide>
          </Slider>
          <div className="page-buttons">
            <ButtonBack className="carousel-button"><ChevronLeftIcon /></ButtonBack>
            <ButtonNext className="carousel-button"><ChevronRightIcon/></ButtonNext>
            </div>
      </CarouselProvider>
      </div>
      <h1 className="page-title">WORK &nbsp; PAGE</h1>
    </>
  );
}

export default Projects;