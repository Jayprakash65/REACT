import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)    // setUser ko laya from usercontext

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})     // hamne ismai ey sikhja ki kaisey ham user mai data ko bej sakte hai 
    }

  return (
    <>
    <h2>Log In</h2>

    <input 
    type="text" 
    value={username}
    onChange={ (e) => setUsername(e.target.value) }
    placeholder='username' />
    {' '}

    <input 
    type="password" 
    value={password}
    onChange={ (e) => setPassword(e.target.value) }
    placeholder='password' />

    <button onClick={handleSubmit}>Submit</button>

    </>
  )
}

export default Login
