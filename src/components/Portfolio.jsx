import React, { useEffect, useState } from "react";
import Cssportfoliocards from "../ui/CssPortfolioCards";
import Javaportfoliocards from "../ui/JavaPortfolioCards";
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
     

          items.forEach((item) =>
            (item.classList.remove("carousel__item--selected"), item.style.animation = "")
          );

          buttons.forEach((bruh) =>
          (bruh.classList.remove("unselect")))

         
          
          if(direction == "forward"){
            itemnumber++
            items[itemnumber].style.animation = "left 800ms"
          }
          if(direction == "backward"){
            itemnumber--
            items[itemnumber].style.animation = "right 800ms"
          }

       if(itemnumber == 0){
            buttons[0].classList.add("unselect");
          }
          if(itemnumber == items.length - 1 ){
            buttons[1].classList.add("unselect");
          }
         
          items[itemnumber].classList.add("carousel__item--selected");
         
       
        })
  }
      
     
     
   
  

  useEffect(() => {
    carousel();
    
  }, [language]);

  function getporftoliocard(code) {

    (document.querySelectorAll(".portfolio__nav--button").forEach((navbutton) => {
      (navbutton.style.animation= "")
    }))

    document.getElementById(code).style.animation ="selected 1.2s infinite alternate 500ms"

    setlanguage(code)

  }

  function renderSwitch(language){
    switch(language){
      case("react"):
      return <Reactportfoliocards  />
      break;
      
      case("js"):
      return <Jsportfoliocards />
      break;

      case("html&css"):
      return <Cssportfoliocards />
      break;

      case("java"):
      return <Javaportfoliocards />
      break;
      
      default:
      }
      
  }
  

  return (
    <section className="projects">
      <div className="carousel">
        <div className="carousel__item--wrapper">
          <div className="">
            <h1 className="carousel__title">My Projects</h1>
            <p>here is a compilation of all my projects for each language</p>
          </div>
          <div className="portfolio__nav">
            <button className="portfolio__nav--button clickable" id="html&css" onClick={() => getporftoliocard("html&css")}>
              HTML&CSS
            </button>
            <button className="portfolio__nav--button clickable" id="js"  onClick={() => getporftoliocard("js")}>JS only</button>
            <button className="portfolio__nav--button clickable" id="react" onClick={() => getporftoliocard("react")}>React</button>
            <button className="portfolio__nav--button clickable" id="java" onClick={() => getporftoliocard("java")}>Java</button>
          
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
