import React from 'react';   
import './Message.css';

const Message = ({user,message,cls}) => {
    if(user){

        return (
            <div className={`mbox ${cls}`}>
            {`${user} : ${message}`}
            </div>
           
          )

    }
    else{
  return (
    <div className={`mbox ${cls}`}>
    {`You : ${message}`}
    </div>
   
  )
    }
}

export default Message