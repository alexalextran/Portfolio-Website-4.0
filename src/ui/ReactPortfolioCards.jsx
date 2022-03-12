import React from "react";
import Portfoliocard from "./PortfolioCard";
import reakt from "../assets/reactphotos/reakt.jpg";
import adashacademy from "../assets/reactphotos/a-academy.jpg";
import ecommerce from "../assets/reactphotos/react-ecommerce.jpg";
import todo from "../assets/reactphotos/TODO.jpg";
import comparisonphoto from "../assets/comparisonphoto.jpg";
import notflix from "../assets/reactphotos/notflix.jpg";

const Reactportfoliocards = () => {
  return (
    <div>
      <Portfoliocard
        link="https://alexalextran.github.io/notflix/"
        title="Notflix"
        text="A scalable and fully responsive netflix clone built using react and TMBD movie api that provides daily and weekly movie updates."
        features="Scalable, responsive, multiplatform, TMDB api, skeleton loading state, user authentication"
        image={notflix}
      />

      <Portfoliocard
        link="http://aadarshanujacademy.com/"
        title="A- Academy"
        text="My first ever react project, that I commissioned for a friend to help promote his youtube channel. Overall I'd definitely say it was one of my best projects, because it gave me first hand experience and because I implemented to many features"
        features="video carousel, fixed navbar, youtube api usage, inbuilt video player, onscroll animations, searchbar function, statistics counter animation, working email contact service, loading animation"
        image={adashacademy}
      />

      <Portfoliocard
        link="https://alexalextran.github.io/todo_app/#"
        title="TODO App"
        text="An imtermediate TODO application that has firebase integration, allowing users to login and manage their own TODO's "
        features="Firebase Integration, filter functions, responsive data management, user authentication, modern UI design"
        image={todo}
      />

      <Portfoliocard
        link="alextranportfolio.com"
        title="E-PortfolioV4"
        text="The website your on right now"
        features="Intuitive Image Carousel, Image comparison Slider, Onscroll Animations, Working Email Service, Contact Modal"
        image={comparisonphoto}
      />

      <Portfoliocard
        link="https://alexalextran.github.io/react-ecommerce-practice/"
        title="React E-commerce"
        text="My attempt at an e-commerce store using react, this was a difficult project for me, because of how unfamiliar I was with react, however using online resources i was able to quickly learn about react hooks, which were a game changer for me and helped me get overcome most of my issues."
        features="include; mock api data, dynamic cart page, filter function, skeleton loading state"
        image={ecommerce}
      />
      <Portfoliocard
        link="https://alexalextran.github.io/keyboard-game/"
        title="Reakt"
        text="My third react project, I made this as a mini side project I made to entertain my friends"
        features="Saved Highscore using local storage, tutorial modal, timer"
        image={reakt}
      />
    </div>
  );
};

export default Reactportfoliocards;
