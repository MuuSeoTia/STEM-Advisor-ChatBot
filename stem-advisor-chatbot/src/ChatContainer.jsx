import React, { useState } from 'react'
import InputContainer from './InputContainer'

function ChatContainer() {
  let [messages,setMessages]=useState("")
  async function aiSubmit(message) {
    fetch("/api",{
      method:"POST",
      body:"message"
    }).then(r=>r.json()).then(data=> setMessages(
    `${messages} 
     ${message}
     ${data}`
     ))
  }

  return (
    <>
    <pre>{messages}</pre>
    <InputContainer aiSubmit={aiSubmit}/>
    </>
  )
}

export default ChatContainer