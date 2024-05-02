import './App.css';
import CompositContainer from './Components/Frame/ContentPart/CompositContainer/CompositContainer';
import InfoBlock from './Components/Frame/ContentPart/InformationBlock/InformationBlock';
import ParallaxContainer from './Components/Frame/ContentPart/ParallaxContainer/ParallaxContainer';
import Footer from './Components/Frame/Footer/Footer';
import Header from './Components/Frame/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <InfoBlock/>
      <CompositContainer/>
      <ParallaxContainer/>
      <Footer/>
    </div>
  );
}

export default App;
