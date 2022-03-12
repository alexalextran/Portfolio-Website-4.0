import React from 'react';
import Portfoliocard from './PortfolioCard';
import cafejava from '../assets/java/cafejava.jpg'
import javacalc from '../assets/java/javacalc.jpg'
import minesweeper from '../assets/java/minesweeper.jpg'

const Javaportfoliocards = () => {
    return (
        <div>
        
            <Portfoliocard 
            link="https://github.com/alexalextran/Java-Calculator-W-Wo-GUI/blob/main/Calculator2.java"
            title="Simple GUI Calculator"
            text="First Ever Project, this goes back to my first year of uni where I started learning java, and for my first project I attempted an simple terminal calculator which I then adapted to a working GUI calculator" features="Working Gui calculator, basic math functions" image={javacalc}/>

            <Portfoliocard
            link="https://github.com/alexalextran/Coffee-Shop-GUI"
             title="Cafe GUI"
              text="This was a Pure GUI project to see how much I could do with JAVA gui libraries for a first time, this was the first time I ever integrated a UI with proper computing logic, which taught me alot about how important a strong UI is" features="receipt function" image={cafejava}/>
            
            {/* <Portfoliocard
            link="https://github.com/alexalextran/MINESWEEPER-CLONE"
            title="Minesweeper Clone"
             text="Minesweeper clone that I attempted with zero game library knowledge, but by performing extensive research using online resources such as youtube and stack overflow i was able to learn about the core fundamentals such as event listeners and state." features="Timer, reset feature, win&lose condition" image={minesweeper}/> */}
        </div>
    );
}

export default Javaportfoliocards;
