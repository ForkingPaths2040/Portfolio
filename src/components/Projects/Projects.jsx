import React from 'react';
import './Projects.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import pointual from '../../assets/images/pointualDetail.png'
import progression from '../../assets/images/progressionTricks.png'

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
      <img className="pointual" src={pointual} />
      <div className="description-container">
        <h3>Pointual</h3>
        <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit pariatur culpa, quae dolore dicta, mollitia fuga veniam est, totam delectus dolores dolorem dolor velit officiis quidem maiores sequi laboriosam eius.</p>
      </div>
          </Slide>
          <Slide index={1}>
      <img className="pointual" src={progression} />
      <div className="description-container">
        <h3>Progression</h3>
        <p className="project-description">Amber ipsum dolor sit amet, consectetur adipisicing elit. Odit pariatur culpa, quae dolore dicta, mollitia fuga veniam est, totam delectus dolores dolorem dolor velit officiis quidem maiores sequi laboriosam eius.</p>
      </div>
          </Slide>
          </Slider>
          <div className="page-buttons">
          <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
            </div>
      </CarouselProvider>
      </div>
      <h1 className="page-title">WORK &nbsp; PAGE</h1>
    </>
  );
}

export default Projects;