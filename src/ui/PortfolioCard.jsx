import React from 'react';

const Portfoliocard = (card) => {
    return (
        <div className='carousel__item'>
            <img className='portfolio__cardimage' src={card.image}>
                
            </img>

            <div className='portfolio__cardtext'>
                {card.text}
            </div>
        </div>
    );
}

export default Portfoliocard;
