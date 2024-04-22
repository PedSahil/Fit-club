import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Join.css";
const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_23dam2h', 'template_fceslxd', form.current, {
            publicKey: '31EXLk65P4W-lblUH',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div className="join" id="join-us">
        <br /><br />
      <div className="left-j noto">
        <hr />
        <div>
          <span className="stroke-text">READY TO </span>
          <span>LEVEL UP </span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className="stroke-text">WITH US</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} onSubmit={sendEmail} className="email-container jura" >
            <input type="email" name="user_email" placeholder="Enter your Email address" />
            <button className="btn btn-j">JOIN NOW</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
