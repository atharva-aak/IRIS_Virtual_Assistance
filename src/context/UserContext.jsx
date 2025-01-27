import React, { createContext }  from 'react'
export const datacontext=createContext()

function UserContext({children}) {

    function speak(text){
        let text_speak = new SpeechSynthesisUtterance(text)
        text_speak.volume=1;
        text_speak.rate=1;
        text_speak.pitch=1;
        text_speak.lang="hi-GB"
        window.speechSynthesis.speak(text_speak)


    }
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(e)=>{
    console.log(e)
}

   let value={
recognition
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
