import React,{useContext}from 'react'
import { AppContext} from "./App";
import crew_front from "./imges/crew_front.png"

const Home = () => {  
    const{color1}=useContext(AppContext)

    return (
        <div className="main-conatiner">
            <div className="sub-conatiner">
                
            <div className="change" style={color1}>
                <p><img src={crew_front} alt=""/></p>
            </div>

            <div className="drawing" style={{
                 position: "absolute",
            top: "100px",
            left: "170px",
            zIndex: 10,
            width: "200px",
            height: "400px",}}>
                <canvas id="canvas"></canvas>
            </div>

            </div>
            
        </div>
    )
}

export default Home
