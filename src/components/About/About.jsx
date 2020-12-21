import React from 'react';
import './About.css'

function About(props) {
  return (
    <div className='about-container' id='about'>
        <h1 id="about-title">ABOUT ME</h1>
      <div className="about-info">
        <p>“I am a junior full-stack developer offering seven years of management experience in customer service.  With the exponential growth of advanced technology, I have chosen to change careers as I am adamant to be self-sufficient with society’s evolving norms. Since I approach problems systematically and have an appetite for expanding and challenging my intellect, web development is only the beginning in this vast, curious career field.  Ultimately, I have a passion for solving problems ‘inside-the-box’ as in most cases there are limitations from the client, a project or an organization. My ability to adapt and serve my own expectations provides a seamless addition to any project or organization.”</p>
      </div>
      <div className="box"><div className="dash"></div></div>
      <div className="horizontal" id="hz1"></div>
      <div className="horizontal" id="hz2"></div>
      <div className="horizontal" id="hz3"></div>
      <div className="horizontal" id="hz4"></div>
    </div>
  );
}

export default About;
