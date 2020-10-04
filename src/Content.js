import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from "react-markdown"; 
import axios from 'axios';
import './App.css';

const Content = () => {
  const { userName, repositoryName } = useParams()  
  const [data, repoData] = useState([]) 
  // const [userId, setId] = useState("")  
    
  useEffect(() => {
    axios.get(`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`).then(it => {  
      repoData((it.data))  
    })  
    return () => {}  
  }, [repoData])  
   
  return <div> 
              <ReactMarkdown id="description" source={data} />
         </div>  
}

export default Content;
