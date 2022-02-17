
import './App.css';
import Landing from './components/Landing';
import Aboutme from './components/AboutMe';
import Mylanguages from './components/MyLanguages';
import Journey from './components/Journey';
import Portfolio from './components/Portfolio';
import Statistics from './components/Statistics';
import Imagecomparison from './components/ImageComparison';
import Footer from './components/Footer';
import logo from '../src/assets/logoalextran.png'
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    setinvisible()
    document.addEventListener("scroll", scanDocument);
  }, []);

  function isVisible(element) {
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = -300; 

    if(elementBox.top - window.innerHeight < distanceFromTop) {
        return true;
    } else {
        return false;
    }
}

function scanDocument() {
    let sectionList = document.getElementsByTagName("section");
  
    for(let i = 1; i < 7; i++){


      if(isVisible(sectionList[i])){
        sectionList[i].childNodes.forEach(child => child.classList.remove('hidden'));
      }
    
    }
  }

    
  function setinvisible(){
    let sectionList = document.getElementsByTagName("section");
    for(let i = 1; i < 7; i++){
    sectionList[i].childNodes.forEach(child => 
      (child.style.transition = "opacity 1s", child.classList += (' hidden'))
      )
    }
    
  }





  
  return (
    <>
   <Landing logo={logo}/>
   <Aboutme />
   <Mylanguages />
   <Portfolio />
   <Journey />
   <Statistics />
   <Imagecomparison />
   <Footer logo={logo}/>
   </>
  );
}

export default App;
