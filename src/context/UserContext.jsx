import React, { createContext, useState }  from 'react'
import run from '../gemini';
export const datacontext=createContext()

function UserContext({children}) {
    let [speaking,setSpeaking] = useState(false)
    let[prompt, setPrompt]=useState("Listening...")

    function speak(text){
        let text_speak = new SpeechSynthesisUtterance(text)
        text_speak.volume=1;
        text_speak.rate=1;
        text_speak.pitch=1;
        text_speak.lang="hi-GB"
        window.speechSynthesis.speak(text_speak)


    }
    async function aiResponse(prompt){
       let text= await run(prompt)
       setPrompt(text)
       speak(text)
    }
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(e)=>{
let currentIndex = e.resultIndex
let transcript=e.results [currentIndex][0].transcript
setPrompt(transcript)
aiResponse(transcript)
}

   let value={
recognition,
speaking,
setSpeaking,
prompt,
setPrompt
   }
  return (
    <div>
        <datacontext.Provider value={value}>
      {children}
      </datacontext.Provider>
    </div>
  )
}

export default UserContext
