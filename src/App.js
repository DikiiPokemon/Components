import './App.css';
import CompositContainer from './Components/Frame/ContentPart/CompositContainer/CompositContainer';
import InfoBlock from './Components/Frame/ContentPart/InformationBlock/InformationBlock';
import ParallaxContainer from './Components/Frame/ContentPart/ParallaxContainer/ParallaxContainer';
import BlockWith3D from './Components/Frame/ContentPart/With3DObject/BlokWith3D';
import WithSliderBlock from './Components/Frame/ContentPart/WithSliderBlock/WithSliderBlock';
import Footer from './Components/Frame/Footer/Footer';
import Header from './Components/Frame/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <InfoBlock/>
      <CompositContainer/>
      <ParallaxContainer/>
      <WithSliderBlock/>
      <BlockWith3D/>
      <Footer/>
    </div>
  );
}

export default App;
