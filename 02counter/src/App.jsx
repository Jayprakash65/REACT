import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(10)    // array ka 0 index mai wo variable hai or 1st index jo hai wo function hai 


  //let counter = 10

  let addvalue = () => {
    //counter++
    setCounter(counter + 1)
    if(counter == 20) {
      setCounter(counter = 20) 
      
    }

  }

  let removevalue = () => {
    //counter--
    setCounter(counter - 1)
    if(counter == 0){
      setCounter(counter = 0) 
    }

  }




  return (
    <>
     <h1>Chai aur react </h1>
     <h2>Counter value: {counter}</h2>
     <button onClick = {addvalue}>Add Value {counter}</button>
     <br />
     <br />
     <button onClick = {removevalue}>Remove Value</button>

    </>
  )
}

export default App
