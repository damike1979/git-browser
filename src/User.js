import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import axios from 'axios';
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
   
  return <div className="body">
              {user.map(it => 
              <div key ={it.name}><li><Link to={`/${userName}/${it.name}`}>{it.name}</Link></li></div>)}
         </div>  
}

export default User;
