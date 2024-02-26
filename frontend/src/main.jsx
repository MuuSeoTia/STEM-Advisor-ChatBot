import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cookie from "js-cookie"

console.log("starting app")
const d = new Date

//uuid cookie for persisting things, can be replaced by something more robust later
Cookie.set("uuid",self.crypto.randomUUID())
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
