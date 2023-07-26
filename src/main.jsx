import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import pubSub from "./modules/pubSub.js"
import testPS from './modules/testPS.js'

const ps = pubSub()

ps.subscribe("button-selected",testPS)
ps.subscribe("testPS",testPS)
ps.subscribe("survey-created",testPS)

ps.publish("testPS","testing pub-sub")

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


export default ps 