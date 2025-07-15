import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//Styles
import './index.css'
import App from './App.jsx'


//Components
import Home from "./components/Home.jsx"
import Planets from './components/Planets.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Planets/>
  </StrictMode>,
)
