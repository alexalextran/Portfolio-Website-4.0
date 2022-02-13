import React from 'react';

const Portfoliocard = (card) => {
    return (
        <div className='carousel__item'>
            <img className='portfolio__cardimage' src={card.image}>
                
            </img>

            <div className='portfolio__cardtext'>
                <p>{card.text}</p>
                <h3>Key Features Include {card.features}</h3>
            </div>
        </div>
    );
}

export default Portfoliocard;
