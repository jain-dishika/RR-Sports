import './App.css';
import AboutUs from './Sections/AboutUs';
import AdditionalServices from './Sections/AdditionalServices';
import Carousel from './Sections/Carousel';
import Game from './Sections/Game';
import Sports from './Sections/Sports';
import Footer from './Universal/Footer';
import Header from './Universal/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <AboutUs/>
      <AdditionalServices/>
      <Game/>
      <Footer/>
    </div>
  );
}

export default App;
