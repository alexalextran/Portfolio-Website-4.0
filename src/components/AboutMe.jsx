import React from "react";
import profilepic from "../assets/PROFILEPIC.jpg";
import resume from "../assets/AlexTran.docx"

const Aboutme = () => {
  return (
    <section id="aboutme">
      <div className="aboutme__profileimage">
        <img className="aboutme__profileimage--jpg" src={profilepic}></img>
      </div>
      <div className="aboutme__info">
      <div className="aboutme__info--wrapper">

      
        <div>
          <h1 className="aboutme__info--title">About Me</h1>
          <p>
            I'm a self-taught front end developer who is learning backend software development within my computer science degree at university. 
            I aspire to one day become a senior react developer or a full stack developer
          </p>
        </div>
        <div>
          <ul className="aboutme__info--details">
            <li className="aboutme__info--li"><b>Name:</b> Alex Tran</li>
            <li className="aboutme__info--li"><b>Age:</b> 18 years</li>
            <li className="aboutme__info--li"><b>Country:</b> Australia, NSW</li>
            <li className="aboutme__info--li"><b>University:</b> University Of Technology Sydney</li>
            <li className="aboutme__info--li"><b>Availability:</b> Interested In Any Front End Position</li>
          </ul>
          <a download href={resume}>
          <button  className="portfolio__cardtext--button learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text" >Download My Resume!</span>
        </button></a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
