import React from 'react';
import Portfoliocard from './PortfolioCard';
import cafejava from '../assets/java/cafejava.jpg'
import javacalc from '../assets/java/javacalc.jpg'
import minesweeper from '../assets/java/minesweeper.jpg'

const Javaportfoliocards = () => {
    return (
        <div>
            <Portfoliocard text="This was my first ever website, and while, its not much, looking back, it shows me how far i've come, from basic text to messing around with api's and building responsive websites" image={javacalc}/>
            
            <Portfoliocard text="The second redesign of my eportfolio, this was my first website that had CSS included, and back then, i was terrible at css, as you can see, the whole home page is a mess, and i even had to get a friend to help with some of the features" features="Css Animations, Animated Cards" image={cafejava}/>
            
            <Portfoliocard text="This was a small little side project, that i wanted to make to store all some of my thoughts. This was my second website that utilized both HTML and CSS, while it was a side project, it did help me alot with understanding the box model for CSS" features="Theme Integration, OnHover Effects." image={minesweeper}/>
        </div>
    );
}

export default Javaportfoliocards;
