import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom' 
import axios from 'axios'
import './App.css';

const User = () => {
  const { userName } = useParams()  
  const [user, setUser] = useState([]) 
  // const [userId, setId] = useState("")  
    
  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}/repos`).then(it => {  
      setUser((it.data))  
    })  
    return () => {}  
  }, [userName])  
   
  return <div>
              <div>{ userName }</div>
              {user.map(it => <div><li>{it.name}</li></div>)}
         </div>  
}

export default User;
