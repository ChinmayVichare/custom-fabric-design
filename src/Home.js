import React,{useContext,useState,useEffect}from 'react'
import { AppContext} from "./App";
import crew_front from "./imges/crew_front.png"
import {fabric} from 'fabric';
const Home = () => {
    const [sel, setsel] = useState("")
    const{color1,setcolor1}=useContext(AppContext)
    const [canvas, setcanvas] = useState("canvas")

    const initcanvas=(id)=>{
        return new fabric.Canvas(id,{
            width:200,
            height:300,
            backgroundColor:"red"
        })
    }

    useEffect(() => {
        
        initcanvas(canvas)

    }, [canvas])
    

    const changecolor =(e)=>{
        setsel(e.target.value)
        console.log(e.target.value);
        setcolor1({backgroundColor:e.target.value})
        console.log(color1);
    }
    return (
        <div>

            <div className="change" style={color1}>
                
                <p><img src={crew_front} alt=""/></p>
            </div>

            <div className="drawing">
                <canvas id="canvas"></canvas>
            </div>

            <div>
            <select name="" id="" value={sel} onChange={changecolor}>
                    <option value="red" >red</option>
                    <option value="yellow">yeloow</option>
                    <option value="blue">blue</option>
                </select>
            </div>
            
        </div>
    )
}

export default Home
