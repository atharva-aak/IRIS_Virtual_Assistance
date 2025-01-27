import React, { useContext } from 'react'
import "./App.css"
import va from "./assets/ai.png"
import { MdMic } from "react-icons/md";
import { datacontext } from './context/UserContext';

function App() {
 let {recognition} =  useContext(datacontext)
  return (
    <div className='main'>

      <img src={va} alt="" id ="vira"/>
      <span>I'm Vera, Your Virtual Assistan</span>
      <button onClick={()=>{
        recognition.start()
      }}> Click Here <MdMic /> </button>

      
    </div>
  )
}

export default App
