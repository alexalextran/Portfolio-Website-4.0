import React, { useEffect, useState } from "react";
import Jsportfoliocards from "../ui/JsPortfolioCards";
import Reactportfoliocards from "../ui/ReactPortfolioCards";

const Portfolio = () => {
  const [language, setlanguage] = useState("react");

  function carousel() {
    document.querySelectorAll(".carousel").forEach((carousel) => {
      const items = carousel.querySelectorAll(".carousel__item");
      const buttons = carousel.querySelectorAll(".carousel__button");
        buttons.forEach(
          (button) => (button.style.pointerEvents = "all", button.style.color = "rgb(0,180,216)"));
      var k = 1;

      buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
          // un-select all the items

          items.forEach((item) =>
            item.classList.remove("carousel__item--selected")
          );
          
         
          if (i == 0) {
            k--;
            if (k == 0) {
              buttons[i].style.pointerEvents = "none";
              buttons[i].style.color = "gray";
            } else {
              buttons[1].style.color = "rgb(0,180,216)";
            }
          } else {
            k++;
            if (k == items.length -1) {
              buttons[i].style.pointerEvents = "none";
              buttons[i].style.color = "gray";
            } else {
              buttons[0].style.color = "rgb(0,180,216)";
            }
          }

          items[k].classList.add("carousel__item--selected");
        });
      });

      // Select the first item on page load
      items[k].classList.add("carousel__item--selected");
    });
  }

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
          <span className="carousel__button clickable"> &lt;</span>

          <span className="carousel__button clickable">/&gt;</span>
          <p>(Click the icons to switch between videos)</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
