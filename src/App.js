import React,{useState,useEffect} from 'react';
import Home from "./Home";
import Imageselector from './Imageselector'
import defaultImage from "./images/designs/design-5.png"
import {fabric} from 'fabric';
import  "./App.css";

export const AppContext = React.createContext();

function App() {
  const [color1, setcolor1] = useState({backgroundColor:"pink"})
    const [sel, setsel] = useState("")
    const [canvas, setcanvas] = useState("")
    const [selectimg,setselectimg]=useState(defaultImage)


  const initcanvas=()=>
  new fabric.Canvas("canvas",{
     width:200,
     height:400,
 })


useEffect(() => { 
 setcanvas(initcanvas())
}, [])

const changecolor =(e)=>{
  setsel(e.target.value)
  console.log(e.target.value);
  setcolor1({backgroundColor:e.target.value})
  console.log(color1);
}

const addImage = () => {
  new fabric.Image.fromURL(selectimg, (img) => {
    img.scaleToHeight(200);
    img.scaleToWidth(200);
    canvas.add(img);
    canvas.renderAll();
  });
};

const removeImage=()=>{
  var object = canvas.getActiveObject();
  if (!object){
      alert('Please select the element to remove');
      return '';
  }
  canvas.remove(object);
}
  return (
    <div className="App">
      <AppContext.Provider value={{color1,setcolor1,sel,
      changecolor,addImage,setselectimg,removeImage}}>
        <div className="container-main">
          <div className="container-sec">
          <Home/>
          <Imageselector/>
          </div>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
