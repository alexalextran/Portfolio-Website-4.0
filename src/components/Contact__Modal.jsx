import React, {useRef} from 'react';
import reactjpg from "../assets/reactjpg.png";
import emailjs, { init } from '@emailjs/browser';
init("user_2jIT9NA6dfZ3X4lKgbInB");

const ContactModal = (props) => {

    const successful = document.getElementById("successful")
    const loading = document.getElementById("loading")
    const form = useRef();
  

    const sendEmail = (e) => {
        e.preventDefault();
        loading.style.opacity = "1"
        loading.style.zIndex = "2"
      
      emailjs.sendForm('service_80ih0if', 'template_d9refyl', form.current, 'user_2jIT9NA6dfZ3X4lKgbInB')
        .then((result) => {
          loading.style.opacity = "0"
        loading.style.zIndex = "-1"
            console.log(result.text);

        }, (error) => { 
            alert("The email service is currently down, please reach alextran474@gmail.com")
            console.log(error.text);
           
        }); 
       
        successful.style.opacity = "1"
        successful.style.zIndex = "2"
      
    };
  


  return (
    <div className="modal">
    <div id="loading">Loading 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"/></svg></div>
  
  
    <div id="successful">Thanks We Received Your Message!</div>



<svg onClick={() => props.modal(false) } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>

      <div className="modal__left">
        <div>
          <h2>Alex Tran</h2>
          <h5>Front End Developer</h5>

          <p>
            Im a Second Year UTS <span className="blue" >Computer Science</span> Student Who Is Interested In
            <span className="blue" > Front End Development</span> and creating Unique <span className="blue" >Web Applications</span>. I Aspire
            To Become A <span className="blue" >React Developer</span> or a Senior Developer One Day
          </p>

          <div className="modal__left--techicons">
            <svg
              className="clickable"
              style={{ fill: "rgb(226,96,40)" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
            </svg>

            <svg
              className="clickable"
              style={{ fill: "rgb(47,160,210)" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
            </svg>

            <svg
              className="clickable"
              style={{ fill: "rgb(234,212,28)" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
            </svg>

            <img src={reactjpg} className="clickable"></img>
          </div>
        </div>
      </div>

      <div className="modal__right">
        <h3>Send A Message My Way</h3>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input placeholder="John Smith..." type="text" required name="user_name"/>
          <label >Email</label>
          <input placeholder="johnsmith@gmail.com" type="email" required name="user_email"/>
          <label>Message</label>
          <textarea placeholder="Message..." name="message"/>

          <button className="modal__right--button learn-more">
            <span className="modal__right--button circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="modal__right--button button-text">
              Send It My Way!
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
