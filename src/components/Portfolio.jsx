import React, { useEffect } from "react";

const Portfolio = () => {
  function carousel() {
    document.querySelectorAll(".carousel").forEach((carousel) => {
      const items = carousel.querySelectorAll(".carousel__item");
      const buttons = carousel.querySelectorAll(".carousel__button");
      
      var k = 1;

      buttons.forEach((button, i) => {
       
        button.addEventListener("click", () => {
          // un-select all the items

          items.forEach((item) =>
            item.classList.remove("carousel__item--selected")
          );
          buttons.forEach((button) =>
          button.style.pointerEvents = "all",
          
        );

          if (i == 0) {
            if (k == 1) {
              buttons[i].style.pointerEvents = "none";
              buttons[i].style.color = "gray";
            }
            
            buttons[1].style.color = "rgb(0,180,216)"
            k--; 
        
        }else {

            if (k == (items.length - 2)) {
                buttons[i].style.pointerEvents = "none";
                buttons[i].style.color = "gray";
              }

              buttons[0].style.color = "rgb(0,180,216)"
            k++;
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
  }, []);

  return (
    <section className="projects">
      <div className="carousel">
        <div className="carousel__item--wrapper">
          <div className="YTvideos__header--text">
            <h1 className="YTvideos__header--title gold">My Projects</h1>
            <p>here is a compilation of all my projects for each language</p>
          </div>
          <div className="porfolio__header--nav">
          <button>HTML&CSS</button>
          <button>JS only</button>
          <button>React</button>
          <button>Java</button>
          <button>Python</button></div>
          <div className="carousel__item">item 1</div>
          <div className="carousel__item">item 2</div>
          <div className="carousel__item">item 3</div>
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
