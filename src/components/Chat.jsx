import React, { useState } from 'react'
import { user } from './Join'
import sio from "socket.io-client";
import { useEffect } from 'react';
import './Chat.css';
import Message from './Message';
import ReactScrollToBottom from 'react-scroll-to-bottom';
import { IoIosSend } from "react-icons/io";
import { AiOutlineWechat ,AiOutlineClose} from "react-icons/ai";



const endPoint = "http://localhost:4500/";  
let socket;

////////////////////////////////////////////////////////////////////////////////
const Chat = () => {
const[id,setid]=useState("");
const[mes,setmes]=useState([]);

  /////////////////////////////////
const send=()=>{
  const message=document.getElementById('cinput').value;
  socket.emit('message',{ message ,id});
  document.getElementById('cinput').value=""; 
}


console.log(mes);
  //////////////////////////////////////////////////

  useEffect(() => {
    socket = sio(endPoint, { transports: ['websocket'] });

    socket.on('connect', () => {
      // alert("connect");
      setid(socket.id);
    })

    socket.emit('joined',{user}); 

    socket.on('welcome',(data)=>{
      setmes([...mes,data]);
      // console.log(data.user , data.message);
    })


  return () => {
socket.disconnect();
socket.off();
    }
  }, [])
/////////////////////////////////////////////////////

useEffect(() => {
  socket.on('sendmessage',(data)=>{
    setmes([...mes,data]);
    console.log(data.user,data.message,data,id);
  })

  return () => {
    socket.off();
  }
}, [mes])

//////////////////////////////////////////////////
useEffect(() => {
  socket.on('userjoined',(data)=>{
    setmes([...mes,data]);
    console.log(data.user,data.message);
  })

  return () => {
    socket.off();
  }
}, [mes])


//////////////////////////////////////////////////


useEffect(() => {
  socket.on('left',(data)=>{
    setmes([...mes,data]);
    console.log(data.user,data.message);
  })

  return () => {
    socket.off();
  }
}, [mes])

//////////////////////////////////////////////////
  return (
  <div className='cpage'>
    <div className='ccontainer'>
      <div className='cheader'> 
      <div className='ccheader'>
      <h4>Chat <span id='hub'>hub</span> </h4>
      <AiOutlineWechat className='logo'></AiOutlineWechat>
      </div>
     <a href='/'><AiOutlineClose className='a'/></a>
      </div>
      <ReactScrollToBottom className='cbox'>
        {mes.map((item,i)=>
          <Message key={i} message={item.message} user={item.id===id?'':item.user} cls={item.id===id?'right':'left'}/>)}
      </ReactScrollToBottom>
      <div className='outer'>
      <div className='inputbox'> 
      <input type="text" onKeyPress={(e)=>e.key==='Enter' ? send(): null} placeholder='Type a message' id='cinput'></input>
      <IoIosSend onClick={send} className='send'></IoIosSend>
      </div>
</div>

    </div>


  </div>

  )
}

export default Chat