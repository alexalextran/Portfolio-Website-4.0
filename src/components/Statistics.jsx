import React, {useEffect} from "react";

const Statistics = () => {
    useEffect(() => {
        
        intoview();
  
      });
  

    var loadonce = false; 
    var text1 = document.getElementById("Projects");
    var text2 = document.getElementById("Days");
    var text3 = document.getElementById("Languages");

    function calculateDate(){
    var started = new Date("02/21/2021");
    var currentDate = new Date();
    var Difference_In_Time = currentDate.getTime() - started.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Difference_In_Days
}
    
  
    function animate(obj, initVal, lastVal, duration) {
      let startTime = null;
      let currentTime = Date.now();
  
      //pass the current timestamp to the step function
      const step = (currentTime) => {
        //if the start time is null, assign the current time to startTime
        if (!startTime) {
          startTime = currentTime;
        }
        //calculate the value to be used in calculating the number to be displayed
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        //calculate what to be displayed using the value gotten above
        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
  
        //checking to make sure the counter does not exceed the last value (lastVal)
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
      };
  
      //start animating
      window.requestAnimationFrame(step);
    }
  
   
  
    function load() {
      loadonce = true;
      animate(text1, 0, 14, 3000);
      animate(text2, 0, calculateDate(), 3000);
      animate(text3, 0, 5, 3000);
    }
    function intoview() {
         text1 = document.getElementById("Projects");
         text2 = document.getElementById("Days");
         text3 = document.getElementById("Languages");
        const statsection = document.getElementById("Statistics");
    
        document.addEventListener("scroll", function () {
          var clientHeight = document.documentElement.clientHeight;
          var statsSectionY = statsection.getBoundingClientRect().y;
          var statsSectionHeight = statsection.getBoundingClientRect().height;
          if (clientHeight > statsSectionY + (statsSectionHeight * 1.5)) {
            if (loadonce == false) {
            
              load();
            }
          }
        });
      }


  return (
    <section id="Statistics">
      <div className="stat">
        <p id="Projects">0</p>
        <p className="statistics__text">Projects Completed</p>
      </div>
      <div className="stat">
        <p id="Days">0</p>
        <p className="statistics__text">Days Programming</p>
      </div>
      <div className="stat">
        <p id="Languages">0</p>
        <p className="statistics__text">Languages In Use</p>
      </div>
    </section>
  );
};

export default Statistics;
