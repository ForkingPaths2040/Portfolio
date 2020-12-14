import React from "react";
import './MyForm.css'

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="form-container">
        <form
        className="contact-form"
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xnqogobl"
        method="POST"
      >
        <label>Full Name:</label>
        <input type="text" name="name" required />
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Subject:</label>
        <input type="text" name="subject" required />
        <label>Message:</label>
        <textarea type="text" name="message" required id="form-message"/>
        {status === "SUCCESS" ? <p className="submit-message">Thank you for being interested in <span id="moore">MOORE</span> potential.</p> : <button className='button-form'>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
        </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}