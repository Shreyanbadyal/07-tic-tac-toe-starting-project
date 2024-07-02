import { useState } from "react";
export default function Player({initialName,symbol ,isActive,onChangeName}){
  const[playerName,setPlayerName] = useState(initialName)
  const[isEditing,setIsEditing] = useState(false);
  function handleEditClick(){
    setIsEditing(!isEditing);
    if(isEditing){
      onChangeName(symbol,playerName)
    };
  }
  function handleChange(event ){
    setPlayerName(event.target.value);
 
  }
  let button_content = 'Edit'
  let editablePlayerName = <span className = "Player-name">{playerName}</span>
  if(isEditing){
    editablePlayerName = <input type="text" required defaultValue = {playerName} onChange={handleChange}/>
    button_content = 'Save';
  }
    return(
        <li className={isActive ? 'active' : undefined}>
        <span className="player">
          {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
       
        </span>
        <button onClick={handleEditClick}>{button_content}</button>
      </li>
    );
}