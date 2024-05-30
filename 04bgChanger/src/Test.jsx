

import { useState } from 'react'
import './index.css'

function Test() {
  const [color, setColor] = useState('olive')

  return (
    <div className='w-full h-screen'
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-2'>
        <div className='flex flex-wrap justify-centre gap-3 bg-white rounded-3xl p-2 mr-4 '>
          <button  onClick = {() => setColor("red")}  className='outline-none px-5 rounded-3xl' style={{backgroundColor: 'red'}} >Red</button>
          <button onClick = {() => setColor("blue")}  className='outline-none px-5 rounded-3xl'  style={{backgroundColor: 'blue'}} >Blue</button>
          <button onClick = {() => setColor("green")} className='outline-none px-5 rounded-3xl' style={{backgroundColor: 'green'}} >Green</button>
          <button onClick = {() => setColor("yellow")} className='outline-none px-5 rounded-3xl'   style={{backgroundColor: 'yellow'}} >Red</button>
          <button onClick = {() => setColor("silver")} className='outline-none px-5 rounded-3xl'   style={{backgroundColor: 'silver'}} >Red</button>
          <button onClick = {() => setColor("crimson")} className='outline-none px-5 rounded-3xl'   style={{backgroundColor: 'crimson'}} >Red</button>
          <button onClick = {() => setColor("#FFA000")} className='outline-none px-5 rounded-3xl'   style={{backgroundColor: '#FFA000'}} >Red</button>
          <button onClick = {() => setColor("#00ffff")} className='outline-none px-5 rounded-3xl'   style={{backgroundColor: '#00ffff'}} >Red</button>
          <button onClick = {() => setColor("	#ff0080")} className='outline-none px-5 rounded-3xl'   style={{backgroundColor: '#ff0080'}} >Red</button>
          
        </div>
        
        
      </div>
    </div>
  )
}

export default Test

