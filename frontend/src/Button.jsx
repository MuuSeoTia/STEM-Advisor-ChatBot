import React from "react";

function Button(){

  function llmCall(){
    fetch("/api").then(

    )
  }

  return(
    <button onClick={llmCall}>Submit button</button>//dummy button does nothing
  )
}
export default Button