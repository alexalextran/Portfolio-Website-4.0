import React from "react";
import mockeportfolio from "../assets/jsphotos/mockeporftolio.jpg"
import dbmi from "../assets/jsphotos/dbmi.jpg"
import memorygame from "../assets/jsphotos/memorygame.jpg"
import Portfoliocard from "./PortfolioCard";

const Jsportfoliocards = () => {
  return (
    
    

    <div>
      <Portfoliocard
        link="https://alexalextran.github.io/mockjavascriptwebsite/"
        title="Mock JS E-Portfolio"
        text="First Javascript Project, this is pretty much a mock e-portfolio, i didn't want to turn this into my Eportfolio V4 because i wanted to wait until i learnt react, to start working on version 4, but this project did help me learn a lot about js and the DOM"
        features="Contact Modal, Dark mode, MouseEvent Listeners, Modern Design, Responsive Design"
        image={mockeportfolio}
      />
      <Portfoliocard
      link="https://alexalextran.github.io/IMBD-API-PRACTICE/"
      title="DBMI"
        text="Having messed around with Javascript, i started my attempt at calling APIs, and this was the result of it, and it turned it pretty well for a first ever API call, even if it a simple Movie API."
        features="Api Usage, Human Centered Design, Error Handling, search and filter function, dark mode, loading state"
        image={dbmi}
      />
      <Portfoliocard
      link="https://alexalextran.github.io/JS-memory-game/"
        title="Chimpanzee Game"
        text="This was a mini side project i started when i got bored of making websites, so i decided to take a break by designing a game instead. This actually was quite helpful in js logic, it taught me a lot about recursion, timeout functions and dynamically updating DOM elements"
        features="Dynamic remaining boxes and lives counter, timer, intuitive game logic, Game Over screen with statistics."
        image={memorygame}
      />
    </div>
  );
};

export default Jsportfoliocards;



