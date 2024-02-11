import React, { useEffect,useState } from "react";
import Message from "./Message";
import Button from "./Button"

function ChatContainer () {
 const [messages,setMessages] = useState(["FirstMessage","SecondMessage"])
 let messagesList = messages.map(e=> <Message text={e}/>)
 useEffect(()=> {
  messagesList = messages.map(e=> <Message text={e}/>) 
 },messages)

 console.log(messagesList)
  return(
    <>
    <ul>
        {messagesList}
    </ul>
    <Button addMessage={setMessages}/>
    </>
  )

}

export default ChatContainer