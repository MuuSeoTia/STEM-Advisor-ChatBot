import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chat from './Chat'
import Button from './Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        BHCC AI advisor app
      </div>
      <Chat/>
      <Button/>
    </>
  )
}

export default App
