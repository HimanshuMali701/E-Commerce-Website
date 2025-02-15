import React from "react";

const ContactUs = () => {
  return (
    <div className="container mt-5">
      <h2 id="contact-us">Contact Us</h2>
      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">Email</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="name@example.com" />
        <div className="form-text">We never share your email address with anyone else. We respect your privacy.</div>
      </div>

      <div className="mb-3">
        <label htmlFor="nameInput" className="form-label">Name</label>
        <input type="text" className="form-control" id="nameInput" />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">Your Message</label>
        <textarea className="form-control" id="message" rows="3"></textarea>
      </div>

      <button type="button" className="btn btn-primary">Submit</button>
    </div>
  );
};

export default ContactUs;
