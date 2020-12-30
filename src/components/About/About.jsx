import React from 'react';
import './About.css'
import wtamu from '../../assets/images/SpiritWT-NewDigital.png'
import cfa from '../../assets/images/cfa.png'
import newks from '../../assets/images/newks.png'
import ga from '../../assets/images/ga.png'
import Timeline from '../Timeline/Timeline'

function About(props) {
  return (
    <div className='about-container' id='about'>
        <h1 id="about-title">ABOUT</h1>
      <div className="about-info">
        <p>“I am a junior full-stack developer offering seven years of management experience in customer service.  With the exponential growth of advanced technology, I have chosen to change careers as I am adamant to be self-sufficient with society’s evolving norms. Since I approach problems systematically and have an appetite for expanding and challenging my intellect, web development is only the beginning in this vast, curious career field.  Ultimately, I have a passion for solving problems ‘inside-the-box’ as in most cases there are limitations from the client, a project or an organization. My ability to adapt and serve my own expectations provides a seamless addition to any project or organization.”</p>
        <div className="timeline-container">
          <Timeline year="2010" img={wtamu} alt="West Texas A&M University logo" title="West Texas A&M University" description="As a student-athlete, I acquired a B.S. in Mass Communication while consistenly landing on the Dean's List and balancing my role as a Resident Assistant. I also won a national title in the Video Comedy Program category at NBS-aerho." />
          <Timeline year="2013" img={cfa} alt="Chick-fil-A logo" title="Chick-fil-A" description="I began my career in the food industry. I had the opportunity to manage as a Back of House Director. Labor, Food cost, and scheduling were some of the many responsibilites I handled.  " />
          <Timeline year="2018" img={newks} alt="Newk's Eatery logo" title="Newk's Eatery" description="Branching out to see other operations, I got to work as an Associate Manager that monitored over 30 employees. Orientation, training, and evaluations were some of the many responsibilites I handled." />
          <Timeline year="2020" img={ga} alt="General Assembly logo" title="General Assembly" description="Wanting to pivot careers, I attended a full-time remote software engineering immersive program in which 480+ hours of education were completed within 12 weeks resulting in 3 portfolio pieces that were each developed in a one-week sprint." />
        </div>
      </div>
    </div>
  );
}

export default About;
