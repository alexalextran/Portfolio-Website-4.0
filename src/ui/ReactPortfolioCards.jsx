import React from "react";
import Portfoliocard from "./PortfolioCard";
import reakt from "../assets/reactphotos/reakt.jpg";
import adashacademy from "../assets/reactphotos/a-academy.jpg";
import ecommerce from "../assets/reactphotos/react-ecommerce.jpg";
import todo from "../assets/reactphotos/TODO.jpg";
import comparisonphoto from "../assets/comparisonphoto.jpg";

const Reactportfoliocards = () => {
  return (
    <div>
      <Portfoliocard
      link="http://aadarshanujacademy.com/"
        title="A- Academy"
        text="My first ever react project, that i commissioned for a friend to help promote his youtube channel. Overall i'd definitely say it was one of my best projects, because it gave me first hand experience and because i implemented to many features"
        features="video carousel, fixed navbar, youtube api usage, inbuilt video player, onscroll animations, searchbar function, statistics counter animation, working email contact service, loading animation"
        image={adashacademy}
      />
      <Portfoliocard
      link="https://alexalextran.github.io/react-ecommerce-practice/"
        title="React E-commerce"
        text="My attempt at an e-commerce store using react, this was probably my hardest ever attempted project, because of how unfamiliar i was with react, and i had to use a ton of tutorials to get through it all."
        features="include; mock api data, dynamic cart page, filter function, skeleton loading state"
        image={ecommerce}
      />
      <Portfoliocard
      link="https://alexalextran.github.io/keyboard-game/"
        title="Reakt"
        text="My third react project, i made this as a mini side project i made to entertain my friends"
        features="Saved Highscore using local storage, tutorial modal, timer"
        image={reakt}
      />

       <Portfoliocard
      link="alextranportfolio.com"
        title="E-PortfolioV4"
        text="The website your on right now"
        features="Intuitive Image Carousel, Image comparison Slider, Onscroll Animations, Working Email Service, Contact Modal"
        image={comparisonphoto}
      />

      <Portfoliocard
        title="TODO App"
        text="TODO Application with firebase integration. (STILL IN DEVELOPMENT)"
        features="(STILL IN DEVELOPMENT)"
        image={todo}
      />
    </div>
  );
};

export default Reactportfoliocards;
