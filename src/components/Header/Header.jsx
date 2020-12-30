import React, { useState } from 'react';
import {Link} from 'react-scroll'
import './Header.css'


function Header(props) {
  const [navbar, setNavbar] = useState('#f34d4d')
  
  const changeBackground = () => {
    if (window.scrollY < 687) {
      setNavbar("#f34d4d")
    } else if(window.scrollY < 1478){
      setNavbar("#50bdd4")
    } else if(window.scrollY < 2160){
      setNavbar("#50bd89")
    } else {
      setNavbar("#fd9950")
    }
  }

  window.addEventListener('scroll', changeBackground)
  return (
    <nav style={{
      backgroundColor: navbar
    }} className='nav-container'>
      <h1 className='logo'>MOORE</h1>
      <ul className='nav-items'>
            <Link activeClass="active" to="landing" spy={true} smooth={true} duration={100}><li>Home</li></Link>
            <Link activeClass="active" to="work" spy={true} smooth={true} duration={100} ><li>Work</li></Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} duration={100} ><li>About</li></Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={100} ><li>Contact</li></Link>
            <a href="https://drive.google.com/file/d/1WlFwlV7kWoaWVTVmOSs4i2H5f2K8WnJJ/view?usp=sharing" target="_blank" rel="noreferrer"><li><button className="button-2">Resume</button></li></a>
      </ul>
    </nav>
  );
}

export default Header;