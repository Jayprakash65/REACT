import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App(props) {
  


  let myObj = {
    username: "jayprakash",
    age: 21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-xl my-4'>Tailwind Test</h1>
      
      <Card username='jay' btntext = 'click me'/>
      <Card username='yadav' btntext = 'vist me'/>
      <Card username='hi' />




    </>
  )
}

export default App
