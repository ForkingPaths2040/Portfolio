import React, { useState } from 'react';
import { Link } from 'react-scroll'
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
            <Link to='/employees'><li>Home</li></Link>
            <Link to='/employees'><li>Work</li></Link>
            <Link to='/employees'><li>About</li></Link>
            <Link to='/employees'><li>Contact</li></Link>
          </ul>
    </nav>
  );
}

export default Header;