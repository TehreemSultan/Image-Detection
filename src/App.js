import React,{useState} from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation'; 
import Logo from './components/logo/Logo'; 
import Rank from './components/rank/Rank'; 
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm'; 
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app= new Clarifai.App({
  apiKey:'dcaeb21f4e0240709213edc795ffe5b1'
});

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

const onInputChange= (e) =>{
  console.log(e.target.value);
}


const onBtnSubmit= (e) =>{
  app.models.predict("d02b4508df58432fbb84e800597b8959","https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2020/12/10/5bc61682-3523-11eb-8d89-a7d6b31c4b8a_image_hires_164759.jpeg?itok=HiuJ1k21&v=1607590085").then(
    function(res){
      console.log(res);
    },function(err){

    }
  )
}

function App() {
  const [input, setinput] = useState('');

  return (
    <div className="App">
     <Particles params={particleparam} className="particles"/>
    <Navigation/>
    <Logo/>
    <Rank/>
    <ImageLinkForm onInputChange={onInputChange} onBtnSubmit={onBtnSubmit}/>
    </div>
  );
}
export default App;
