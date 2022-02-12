import React from 'react';
import Portfoliocard from './PortfolioCard';
import reakt from '../assets/reactphotos/reakt.jpg'
import adashacademy from '../assets/reactphotos/a-academy.jpg'
import ecommerce from '../assets/reactphotos/react-ecommerce.jpg'

const Reactportfoliocards = () => {
    return (
        <div>
            <Portfoliocard text="My third react project, i made this as a mini side project, to help myself with programming logic, comes complete with difficulty modes and saves your highest score using local storage" image={reakt}/>
            <Portfoliocard text="My first ever react project, that i commissioned for a friend to help promote his youtube channel. Noticeable features include a video carousel, fixed navbar, youtube api usage, inbuilt video player, onscroll animations, searchbar function" image={adashacademy}/>
            <Portfoliocard text="My attempt at an e-commerce store using react, this was probably my hardest ever attempted project, because of how unfamiliar i was with react, and i had to use a ton of tutorials to get through it all. Noticeable features include; mock api data, dynamic card page, filter function" image={ecommerce}/>
        </div>
    );
}

export default Reactportfoliocards;
