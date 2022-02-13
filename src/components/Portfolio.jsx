import React, { useEffect, useState } from "react";
import Jsportfoliocards from "../ui/JsPortfolioCards";
import Reactportfoliocards from "../ui/ReactPortfolioCards";

const Portfolio = () => {
  const [language, setlanguage] = useState("react");
  var itemnumber = 0

  function carousel(direction) {
    
    
    document.querySelectorAll(".carousel").forEach((carousel) => {
      const items = carousel.querySelectorAll(".carousel__item");
      const buttons = carousel.querySelectorAll(".carousel__button");
      items[itemnumber].classList.add("carousel__item--selected");
      console.log(itemnumber)
          items.forEach((item) =>
            item.classList.remove("carousel__item--selected")
          );

          buttons.forEach((bruh) =>
          (bruh.style.pointerEvents = "all", bruh.style.color = "rgb(14,182,216)")
          );

         
          
          if(direction == "forward"){
            itemnumber++
          }
          
          if(direction == "backward"){
            itemnumber--
          }

       if(itemnumber == 0){
            buttons[0].style.pointerEvents = "none";
            buttons[0].style.color = "gray";
          }
          if(itemnumber == items.length - 1 ){
            buttons[1].style.pointerEvents = "none";
            buttons[1].style.color = "gray";
          }
         
          items[itemnumber].classList.add("carousel__item--selected");
         
       
        });
      };
      
     
     
   
  

  useEffect(() => {
    carousel();
    
  }, [language]);

  function getporftoliocard(code) {
    setlanguage(code);

  }

  function renderSwitch(language){
    switch(language){
      case("react"):
      return <Reactportfoliocards  />
      break;
      
      case("js"):
      return <Jsportfoliocards />
      break;
      
      default:
      }
      
  }
  

  return (
    <section className="projects">
      <div className="carousel">
        <div className="carousel__item--wrapper">
          <div className="YTvideos__header--text">
            <h1 className="YTvideos__header--title gold">My Projects</h1>
            <p>here is a compilation of all my projects for each language</p>
          </div>
          <div className="porfolio__header--nav">
            <button onClick={() => getporftoliocard("html&css")}>
              HTML&CSS
            </button>
            <button onClick={() => getporftoliocard("js")}>JS only</button>
            <button onClick={() => getporftoliocard("react")}>React</button>
            <button onClick={() => getporftoliocard("java")}>Java</button>
            <button onClick={() => getporftoliocard("python")}>Python</button>
          </div>



          {renderSwitch(language)}
        
        </div>

        <div className="carousel__nav">
          <span className="carousel__button clickable" onClick={() => carousel("backward")}> &lt;</span>

          <span className="carousel__button clickable" onClick={() =>carousel("forward")} >/&gt;</span>
          <p>(Click the icons to switch between videos)</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
