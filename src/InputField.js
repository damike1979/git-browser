import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './App.css';

const InputField = (props) => {
  let history = useHistory();

  const [userInput, setUserInput] = useState("");
  
  const onChange = (e) => {
    setUserInput(e.target.value)
  }
  
  const onClick = (e) => {
    const targetUser = e.target.value
    history.push({
      pathname: `/${targetUser}`
    })
    //setUserInput(targetUser)
    //props.onClick(targetUser)
    //setUserInput('')
  }
    
   return <div>
     <input type="text" id="input-field" value={userInput} onChange={onChange} name="sampleInput" placeholder="Enter username"/>
     <button id="search-button" onClick={onClick} value={userInput}>Search</button>
   </div>
}

export default InputField;
