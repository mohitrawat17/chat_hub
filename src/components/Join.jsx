import React, { useState } from 'react'
import "./join.css"
import { Link } from 'react-router-dom'

let user;

const adduser = () => {
  user = document.getElementById('inp').value;
  document.getElementById('inp').value = "";
}


const Join = () => {

  const [name, setname] = useState("");



  return (
    <div className='page'>
    <div className='clkk'>
      </div>
      <div className='container'>
        <div id='chat'>Chat <span id='hub'>hub</span></div>
        <input type="text"  onChange={(e) => setname(e.target.value)} placeholder='Enter Your Name' id='inp'></input>
        <Link to="/chat" className='linkk' onClick={(event) => name ? null : event.preventDefault()}> <h3 onClick={adduser} >  Join</h3> </Link>
      </div>
      
     
    </div>
  )
}

export default Join
export { user }