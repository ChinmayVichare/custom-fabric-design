import React,{useState,useContext} from 'react';
import Home from "./Home";
import  "./App.css";

export const AppContext = React.createContext();

function App() {
  const [color1, setcolor1] = useState({backgroundColor:"pink"})

  

  return (
    <div className="App">
      <AppContext.Provider value={{color1,setcolor1}}>
        <div className="container-main">
          <div className="container-sec">
          <Home/>
          </div>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
