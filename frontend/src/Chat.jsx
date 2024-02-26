import React from "react"
function Chat({handleChatInput}) {
  return (
    <label onInput={handleChatInput}>
      Send to openai<input defaultValue="question for advisor"/>
    </label>
  )
}

export default Chat