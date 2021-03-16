import './App.css';
import Navigation from './components/navigation/Navigation'; 
import Logo from './components/logo/Logo'; 
import Rank from './components/rank/Rank'; 
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm'; 
import Particles from 'react-particles-js';

const particleparam={
  particles: {
     number:{
       value:120,
       density:{
         enable:true,
         value_area:1000
       }
     }
  }
}

function App() {
  return (
    <div className="App">
     <Particles params={particleparam} className="particles"/>
    <Navigation/>
    <Logo/>
    <Rank/>
    <ImageLinkForm/>
    </div>
  );
}
export default App;
