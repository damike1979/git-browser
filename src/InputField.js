import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './App.css';
import './My.css';

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
    
   return <div className="form-group">
            <div>Давай, вводи имя пользователя</div>
            <input type="text" className="form-field" id="input-field" value={userInput} onChange={onChange} placeholder="Enter username"/>
            <span><button id="search-button" onClick={onClick} value={userInput}>Search</button></span>
          </div>
}

export default InputField;
