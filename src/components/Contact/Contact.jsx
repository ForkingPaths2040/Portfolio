import React from 'react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyForm from '../MyForm/MyForm';



function Contact(props) {
  return (
    <div className="contact-container">
      <div className="contact-border">
        <h1 id="contact-title">CONTACT</h1>
        <MyForm />
      </div>
    </div>
  );
}

export default Contact;