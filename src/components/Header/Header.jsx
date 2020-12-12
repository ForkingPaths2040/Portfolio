import React from 'react';
import { Link } from 'react-scroll'
import './Header.css'

function Header(props) {
  return (
    <nav className='nav-container'>
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