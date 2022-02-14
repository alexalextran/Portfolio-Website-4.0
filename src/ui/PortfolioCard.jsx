import React from 'react';

const Portfoliocard = (card) => {
    return (
        <div className='carousel__item'>
            <img className='portfolio__cardimage' src={card.image}>
                
            </img>

            <div className='portfolio__cardtext'>
           
            <div className='portfolio__cardtext--description'>
                <h1>{card.title}</h1>
                <p>{card.text}</p>
            </div>
                <h4 className='portfolio__cardtext--features'>Key Features Include {card.features}</h4>
                <button className='portfolio__cardtext--button'>Check Out My Project!</button>
            </div>
         
       
        </div>
    );
}

export default Portfoliocard;
