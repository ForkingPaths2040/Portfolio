import React from 'react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyForm from '../MyForm/MyForm';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomIcon from '@material-ui/icons/Room';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import GitHubIcon from '@material-ui/icons/GitHub';



function Contact(props) {
  return (
    <div className="contact-container" id='contact'>
      <div className="contact-border">
        <h1 id="contact-title">CONTACT</h1>
        <MyForm />
        <div className="my-info">
        <a href="mailto:ambermoorexc@gmail.com" target="_blank" rel="noreferrer"><div className="info-row clickable"><MailOutlineIcon style={{ fontSize: "34px" }}/><p>ambermoorexc@gmail.com</p></div></a>
        <div id='austin' className="info-row"><RoomIcon style={{ fontSize: "34px" }}/><p>Austin, TX</p></div>
        <a href="https://github.com/ForkingPaths2040" target="_blank" rel="noreferrer"><div className="info-row clickable"><GitHubIcon style={{ fontSize: "34px" }}/><p>https://github.com/ForkingPaths2040</p></div></a>
        <a href="https://www.linkedin.com/in/amooredev/" target="_blank" rel="noreferrer"><div className="info-row clickable"><FontAwesomeIcon icon={faLinkedin} size="2x" style={{ marginLeft: "5px" }}/><p>https://www.linkedin.com/in/amooredev/</p></div></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;