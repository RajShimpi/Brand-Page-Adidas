import './App.css';
import Footer from './components/Footer';
import Jersey from './components/Jersey';
import Navbar from './components/Navbar';
import Testjersey from './components/Testjersey';
import Tracksuit from './components/Tracksuit';
import Bag from './components/bag';
import Cap from './components/cap';
import Shoes from './components/shoes';
import Sportwaer from './components/sportwaer';
import T20 from './components/t20';

function App() {
  return (
    <>
    <Navbar />
    <T20/>
    <Jersey/>
    <Testjersey/>
    <Sportwaer/>
    <Tracksuit/>
    <Shoes/>
    <Bag/>
    <Cap/>
    <Footer/>
    </>
  );
}

export default App;
