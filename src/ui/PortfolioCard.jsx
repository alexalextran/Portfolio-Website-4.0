import React from 'react';

const Portfoliocard = (card) => {
    return (
        <div className='carousel__item'>
            <img className='portfolio__cardimage' src={card.image}>
                
            </img>

            <p>
                {card.text}
            </p>
        </div>
    );
}

export default Portfoliocard;
