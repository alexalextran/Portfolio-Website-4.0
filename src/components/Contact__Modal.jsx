import React from "react";
import reactjpg from "../assets/reactjpg.png";

const ContactModal = () => {
  return (
    <div className="modal">
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
        <form>
          <label>Name</label>
          <input placeholder="John Smith..." />
          <label>Email</label>
          <input placeholder="johnsmith@gmail.com" />
          <label>Message</label>
          <textarea placeholder="johnsmith@gmail.com" />

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