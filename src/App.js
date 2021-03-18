import React,{useState} from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation'; 
import SignIn from './components/signIn/SignIn'; 
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
  const [box, setbox] = useState({});
  const [route, setroute] = useState('signin')

  
const onInputChange= (e) =>{
  setinput(e.target.value);
}

const calFaceLoc =(data) =>{
  const face=data.outputs[0].data.regions[0].region_info.bounding_box;
  const image= document.getElementById('inputImage');
  const width=Number(image.width);
  const height=Number(image.height);
  return {
    leftCol: face.left_col*width,
    topRow: face.top_row*height,
    rightCol:width-(face.right_col*width),
    bottomRow:height-(face.bottom_row*height)
  }

}

const faceBox= (box) =>{
  console.log(box);
  setbox(box);
}

const onBtnSubmit= (e) =>{
  setimageUrl(input);
  app.models.predict(Clarifai.FACE_DETECT_MODEL,input)
  .then(res =>faceBox(calFaceLoc(res)))
  .catch(err => console.log(err))
}

const onRouteChange = (value) =>{
  setroute(value);
}

  return (
    <div className="App">
    <Particles params={particleparam} className="particles"/>
    <Navigation onRouteChange={onRouteChange}/>
    {route==='signin'?<SignIn onRouteChange={onRouteChange}/>:<div>
    <Logo/>
    <Rank/>
    <ImageLinkForm onInputChange={onInputChange} onBtnSubmit={onBtnSubmit}/>
    <FaceRecognition box={box} imageUrl={imageUrl}/></div>}
    </div>
  );
}
export default App;
