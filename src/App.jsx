import React, { useContext } from 'react'
import "./App.css"
import va from "./assets/model.png"
import { MdMic } from "react-icons/md";
import { datacontext } from './context/UserContext';
import speakimg from "./assets/speak.gif"
import aigif from "./assets/aiVoice.gif"

function App() {
 let {recognition,speaking,setSpeaking,prompt,response,setPrompt,setResponse} =  useContext(datacontext)
  return (
    <div className='main'>

      <img src={va} alt="" id ="vira"/>
      <span>I'm Iris, Your Virtual Assistant</span>
      <span>Made By: Atharva Kalbande</span>
      {!speaking? 
      
      <button onClick={()=>{
        setPrompt("Listening...")
        setSpeaking(true)
        setResponse(false)
        recognition.start()
      }}> Click Here <MdMic /> </button>

      :
      <div className='response'>
        {!response? 
        <img src={speakimg} alt="" id="speak" />
        :
        <img src={aigif} alt="" id="aigif" />}
        <p>{prompt}</p>

      </div>

    }
    

      
    </div>
  )
}

export default App
