import React,{useState} from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation'; 
import Logo from './components/logo/Logo'; 
import Rank from './components/rank/Rank'; 
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm'; 
import FaceRecognition from './components/faceRecognition/FaceRecognition'; 
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


function App() {
  const [input, setinput] = useState('');
  const [imageUrl, setimageUrl] = useState('');

  
const onInputChange= (e) =>{
  setinput(e.target.value);
}


const onBtnSubmit= (e) =>{
  setimageUrl(input);
  app.models.predict(Clarifai.FACE_DETECT_MODEL,input).then(
    function(res){
      console.log(res.outputs[0].data.regions[0].region_info.bounding_box);
    },function(err){

    }
  )
}

  return (
    <div className="App">
     <Particles params={particleparam} className="particles"/>
    <Navigation/>
    <Logo/>
    <Rank/>
    <ImageLinkForm onInputChange={onInputChange} onBtnSubmit={onBtnSubmit}/>
    <FaceRecognition imageUrl={imageUrl}/>
    </div>
  );
}
export default App;
