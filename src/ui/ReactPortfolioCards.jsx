import React from 'react';
import Portfoliocard from './PortfolioCard';
import reakt from '../assets/reactphotos/reakt.jpg'
import adashacademy from '../assets/reactphotos/a-academy.jpg'
import ecommerce from '../assets/reactphotos/react-ecommerce.jpg'

const Reactportfoliocards = () => {
    return (
        <div>
            
            <Portfoliocard text="My first ever react project, that i commissioned for a friend to help promote his youtube channel. Overall i'd definitely say it was one of my best projects, because it gave me first hand experience and because i implemented to many features" features="video carousel, fixed navbar, youtube api usage, inbuilt video player, onscroll animations, searchbar function, statistics counter animation, working email contact service, loading animation" image={adashacademy}/>

            <Portfoliocard text="My attempt at an e-commerce store using react, this was probably my hardest ever attempted project, because of how unfamiliar i was with react, and i had to use a ton of tutorials to get through it all."  features = "include; mock api data, dynamic cart page, filter function, skeleton loading state" image={ecommerce}/>
            <Portfoliocard text="My third react project, i made this as a mini side project i made to entertain my friends" features="Saved Highscore using local storage, tutorial modal, timer" image={reakt}/>
        </div>
    );
}

export default Reactportfoliocards;
