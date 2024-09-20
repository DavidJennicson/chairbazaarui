import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/com/Navbar'
import HomePage from './components/com/Homepage'
import ChairBazaarHome from './components/com/ChairBazaar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ChairBazaarHome/>
    </>
  )
}

export default App
