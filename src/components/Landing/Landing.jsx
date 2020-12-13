import React from 'react';
import './Landing.css'

function Landing(props) {
  return (
    <div className="landing-container">
      <div className="landing-box">
        <h1 id="first-line"><span id="hello">Hello,</span> my name is Amber Moore.</h1>
      <div id="second-line">
        <h1>I am a software engineer specializing in full-stack applications</h1>
        <h1 id="commented">// one line at a time.</h1>
      </div>
      <div id='monoton'>
        <h1>LANDING &nbsp; PAGE</h1>
        </div>
      </div>
    </div>
  );
}

export default Landing;