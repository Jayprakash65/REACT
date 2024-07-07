import React, {useContext} from 'react'
import UserContext from '../context/UserContext'


const Profile = () => {

    const {user} = useContext(UserContext)

    if (!user) return <div>please login</div>
    
    return (
        <>
        <div>welcome {user.username}</div> 
        <div>Password {user.password}</div> 
        
        </>

    )
  
}

export default Profile
