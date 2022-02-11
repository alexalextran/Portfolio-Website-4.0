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
          <h1>About Me</h1>
          <p>
            Im an student programmer that is currently learning about front end
            development, i aspire to one day become a seinor react developer or
            a full stack developer
          </p>
        </div>
        <div>
          <ul className="aboutme__info--details">
            <li className="aboutme__info--li">Name: Alex Tran</li>
            <li className="aboutme__info--li">Age: 18 years</li>
            <li className="aboutme__info--li">Country: Australia, NSW</li>
            <li className="aboutme__info--li">University: University Of Technology</li>
            <li className="aboutme__info--li">Avaliability: Interested in any front end position</li>
          </ul>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
