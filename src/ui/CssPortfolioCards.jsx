import React from 'react';
import eport1 from '../assets/css/eportv1.jpg'
import eport2 from '../assets/css/eportv2.jpg'
import eport3 from '../assets/css/eportv3.jpg'
import phil from '../assets/css/phil.jpg'
import Portfoliocard from './PortfolioCard';

const Cssportfoliocards = () => {
    return (
        <div>
             <Portfoliocard link="https://alexalextran.github.io/portfolio-website-1.0/" title="E-portfolio V1" text="This was my first ever website, and while, its not much, looking back, it shows me how far I've come, from basic text to messing around with api's and building responsive websites" features="It Works :)" image={eport1}/>
            <Portfoliocard link="https://alexalextran.github.io/Portfolio-website-2.0/" title="E-portfolio V2" text="The second redesign of my eportfolio, this was my first website that had CSS included, and back then, I was terrible at css, as you can see, the whole home page is a mess, and I even had to get a friend to help with some of the features" features="Css Animations, Animated Cards" image={eport2}/>
            <Portfoliocard link="https://alexalextran.github.io/Portfolio-website-3.0/" title="E-portfolio V3" text="The third redesign of my eportfolio, this attempted the redesign when I was fairly confident at css, since I hated the look of the of the second design, so this page comes complete with a very nice looking Ui" features="Css Animations, Clean Ui, Onhover Effects, Css only Image Carousel" image={eport3}/>
            <Portfoliocard link="http://www.101philosophy.com/" title="Philosophy 101" text="This was a small little side project, that I wanted to make to store all some of my thoughts. This was my second website that utilized both HTML and CSS, while it was a side project, it did help me alot with understanding the box model for CSS" features="Theme Integration, OnHover Effects." image={phil}/>
        </div>
    );
}

export default Cssportfoliocards;
