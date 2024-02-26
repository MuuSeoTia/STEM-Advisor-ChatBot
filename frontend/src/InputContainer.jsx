import React,{useState,useEffect} from "react";
import Button from "./Button";
import Chat from "./Chat";



function InputContainer({aiSubmit}) {
  let [chatValue,setChatValue]=useState("question for advisor")
  function handleChatInput(e){
    setChatValue(e.target.value)
  }
  function clickHandler(e) {
    console.log(chatValue)
    aiSubmit(chatValue)
  }

  return (
    <>
    <Chat handleChatInput={handleChatInput}/>
    <Button clickHandler={clickHandler}/>
    </>
  )

}

export default InputContainer