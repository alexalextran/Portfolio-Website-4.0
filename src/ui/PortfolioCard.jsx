import React from "react";

const Portfoliocard = (card) => {
  return (
    <div className="carousel__item">
      <img className="portfolio__cardimage" src={card.image}></img>

      <div className="portfolio__cardtext">
        <div className="portfolio__cardtext--description">
          <h1>{card.title}</h1>
          <p>{card.text}</p>
        </div>
        <h4 className="portfolio__cardtext--features">
          Key Features Include {card.features}
        </h4>
        <a target="_blank" href={card.link}>  
        <button className="portfolio__cardtext--button learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text" >Check Out My Project!</span>
        </button></a>
      </div>
    </div>
  );
};

export default Portfoliocard;
