import React from 'react';
import eport1 from '../assets/css/eportv1.jpg'
import eport2 from '../assets/css/eportv2.jpg'
import eport3 from '../assets/css/eportv3.jpg'
import phil from '../assets/css/phil.jpg'
import Portfoliocard from './PortfolioCard';

const Cssportfoliocards = () => {
    return (
        <div>
             <Portfoliocard title="E-portfolio V1" text="This was my first ever website, and while, its not much, looking back, it shows me how far i've come, from basic text to messing around with api's and building responsive websites" image={eport1}/>
            <Portfoliocard title="E-portfolio V2" text="The second redesign of my eportfolio, this was my first website that had CSS included, and back then, i was terrible at css, as you can see, the whole home page is a mess, and i even had to get a friend to help with some of the features" features="Css Animations, Animated Cards" image={eport2}/>
            <Portfoliocard title="E-portfolio V3" text="The third redesign of my eportfolio, this attempted the redesign when i was fairly confident at css, since i hated the look of the of the second design, so this page comes complete with a very nice looking Ui" features="Css Animations, Clean Ui, Onhover Effects, Css only Image Carousel" image={eport3}/>
            <Portfoliocard title="Philosophy 101" text="This was a small little side project, that i wanted to make to store all some of my thoughts. This was my second website that utilized both HTML and CSS, while it was a side project, it did help me alot with understanding the box model for CSS" features="Theme Integration, OnHover Effects." image={phil}/>
        </div>
    );
}

export default Cssportfoliocards;