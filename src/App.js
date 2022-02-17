
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


function App() {
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
