import React from "react";
import profilepic from "../assets/PROFILEPIC.jpg";

const Aboutme = () => {
  return (
    <section className="aboutme">
      <div className="aboutme__profileimage">
        <img className="aboutme__profileimage--jpg" src={profilepic}></img>
      </div>
      <div className="aboutme__info">
      <div className="aboutme__info--wrapper">

      
        <div>
          <h1 className="aboutme__info--title">About Me</h1>
          <p>
            Im an student programmer that is currently learning about front end
            development, i aspire to one day become a seinor react developer or
            a full stack developer
          </p>
        </div>
        <div>
          <ul className="aboutme__info--details">
            <li className="aboutme__info--li"><b>Name:</b> Alex Tran</li>
            <li className="aboutme__info--li"><b>Age:</b> 18 years</li>
            <li className="aboutme__info--li"><b>Country:</b> Australia, NSW</li>
            <li className="aboutme__info--li"><b>University:</b> University Of Technology</li>
            <li className="aboutme__info--li"><b>Avaliability:</b> Interested in any front end position</li>
          </ul>
          <button>Download My resume</button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
