import React from 'react';
import Portfoliocard from './PortfolioCard';
import reakt from '../assets/reactphotos/reakt.jpg'
import adashacademy from '../assets/reactphotos/a-academy.jpg'
import ecommerce from '../assets/reactphotos/react-ecommerce.jpg'

const Reactportfoliocards = () => {
    return (
        <div>
            <Portfoliocard text="reactreactreact" image={reakt}/>
            <Portfoliocard text="reactreactreact" image={adashacademy}/>
            <Portfoliocard text="reactreactreact" image={ecommerce}/>
        </div>
    );
}

export default Reactportfoliocards;
