import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    
    //const [data, setData] = useState([])

    // useEffect( () => {
    //     fetch('https:/api.github.com/users/jayprakash65')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])


  return (
    <>
    <div className='flex '>
    <img src={data.avatar_url} alt="" className='h-40'/>
    <div className='text-center m-4 bg-gray-400 p-5'>Github Count : {data.followers}</div>
    </div>
    </>
  )
}

export default Github





// loader concept 
export const githubInfoLoader = async () => {
  const response = await fetch('https:/api.github.com/users/jayprakash65')
  return response.json()
}