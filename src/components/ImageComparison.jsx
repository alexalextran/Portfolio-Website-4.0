import React, { useEffect } from 'react';
import comparisonnew from '../assets/comparisonphoto.jpg'
import comparisonold from '../assets/css/eportv2.jpg'

const Imagecomparison = () => {

    

    useEffect(() => {
        initComparisons();
       
    });

    function initComparisons() {
        var x;
        /* Find all elements with an "overlay" class: */
        x = document.querySelector(".img-comp-overlay");
        compareImages(x);
       
        function compareImages(img) {
          var slider, clicked = 0, w, h;
          
          /* Get the width and height of the img element */
         
             w = img.offsetWidth;
          h = img.offsetHeight;
       
         
          /* Set the width of the img element to 50%: */
          img.style.width = (w / 2) + "px";
          /* Create slider: */
          slider = document.createElement("DIV");
          slider.setAttribute("class", "img-comp-slider");
          /* Insert slider */
          img.parentElement.insertBefore(slider, img);
          /* Position the slider in the middle: */
          slider.style.top = (h / 2) + (slider.offsetHeight) + "px";
          slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";

          console.log((slider.offsetHeight / 2))
          /* Execute a function when the mouse button is pressed: */
          slider.addEventListener("mousedown", slideReady);
          /* And another function when the mouse button is released: */
          window.addEventListener("mouseup", slideFinish);
          /* Or touched (for touch screens: */
        
          function slideReady(e) {
            /* Prevent any other actions that may occur when moving over the image: */
            e.preventDefault();
            /* The slider is now clicked and ready to move: */
            clicked = 1;
            /* Execute a function when the slider is moved: */
            window.addEventListener("mousemove", slideMove);
         
          }
          function slideFinish() {
            /* The slider is no longer clicked: */
            clicked = 0;
          }
          function slideMove(e) {
            var pos;
            /* If the slider is no longer clicked, exit this function: */
            if (clicked == 0) return false;
            /* Get the cursor's x position: */
            pos = getCursorPos(e)
            /* Prevent the slider from being positioned outside the image: */
            if (pos < 0) pos = 0;
            if (pos > w) pos = w;
            /* Execute a function that will resize the overlay image according to the cursor: */
            slide(pos);
          }
          function getCursorPos(e) {
            var a, x = 0;
            e = (e.changedTouches) ? e.changedTouches[0] : e;
            /* Get the x positions of the image: */
            a = img.getBoundingClientRect();
            /* Calculate the cursor's x coordinate, relative to the image: */
            x = e.pageX - a.left;
            /* Consider any page scrolling: */
            x = x - window.pageXOffset;
            return x;
          }
          function slide(x) {
            /* Resize the image: */
            img.style.width = x + "px";
            /* Position the slider: */
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
          }
        }
      }

     

    return (
        <section className='imagecomparison'>
        
            <div className="img-comp-container">
            <h1>My Progress</h1>
            <p>Looking back, I've come a long way ever since starting front end, from creating my first proper eportfolio to clean modern react websites that your seeing right now</p>
            <div className="img-comp-img">
            <img src={comparisonnew}></img>
             </div>
            <div className="img-comp-img img-comp-overlay">
            <img src={comparisonold}></img>
            </div>
            </div>

              <div className='imagecomparison__contact'>
                <p>Thank You For Taking The Time To Explore My E-Porfolio And As Always, Don't Hesitate to Message Me If You Have Any Enquiries!</p>
                <p>click the mail icon on the side to send me a message!</p>
              </div>
            
        </section>
    );
}

export default Imagecomparison;
