import React, { useContext } from 'react'
import "./App.css"
import va from "./assets/ai.png"
import { MdMic } from "react-icons/md";
import { datacontext } from './context/UserContext';
import speakimg from "./assets/speak.gif"

function App() {
 let {recognition,speaking,setSpeaking,prompt} =  useContext(datacontext)
  return (
    <div className='main'>

      <img src={va} alt="" id ="vira"/>
      <span>I'm Vera, Your Virtual Assistant</span>
      {!speaking? 
      
      <button onClick={()=>{
        setSpeaking(true)
        recognition.start()
      }}> Click Here <MdMic /> </button>

      :
      <div className='response'>
        <img src={speakimg} alt="" id="speak" />
        <p>{prompt}</p>

      </div>

    }
    

      
    </div>
  )
}

export default App
