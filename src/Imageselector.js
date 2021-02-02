import React,{useContext} from 'react'
import { AppContext} from "./App";
import {images} from './data'
const Imageselector = () => {
    const{setselectimg,addImage,sel,changecolor,removeImage,meow}=useContext(AppContext)
    return (
        <div>

            <form action="">
            <label for="favcolor">Select your favorite color:</label>
                <input type="color" value={meow} onChange={changecolor}/>
            </form>

        <ul className="addImage">
                    {images.map((img)=>{
                        return(
                            <li className="imagelist" key={img.id}>
                                <img className="definedImages" onClick={()=>setselectimg(img.url)} src={img.url} alt=""/>
                            </li>
                        )
                        
                    })}
                </ul>
            <button type="button" onClick={addImage}>Add iamge</button>
            <button type="button" onClick={removeImage}>Delete</button>
{/* 
            <select name="" id="" value={sel} onChange={changecolor}>
                    <option value="red" >red</option>
                    <option value="yellow">yeloow</option>
                    <option value="blue">blue</option>
                </select> */}
        </div>
    )
}

export default Imageselector
