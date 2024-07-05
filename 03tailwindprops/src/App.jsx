import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  
  
  let myObj = {
    username: "jayprakash",
    age: 21
  }

  let newArr = [1,2,3]
  

  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-xl my-4 font-bold'>Tailwind Test</h1>
      
      <Card username='jay' btntext = 'click me'/>
      <Card username='yadav' btntext = 'vist me'/>
      <Card username='hi' />
      <Card someObj = {myObj} />   
      <Card someArr = {newArr} />  






    </>
  )
}

export default App
