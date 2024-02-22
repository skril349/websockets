import React from 'react'
import SendMessage from './SendMessage'
import IncommingMessage from './IncommingMessage'
import OutgoingMessage from './OutgoingMessage'

const Messages = () => {
    const msgs = [1,2,3,4,5,6,7,8,9]
  return (
    <div className="mesgs">
    <div className="msg_history">
        {
            msgs.map((msg)=>(
                (msg%2)?<IncommingMessage key={msg}/>:<OutgoingMessage key={msg}/>
            ))
        }

      {/* <IncommingMessage/>
      <OutgoingMessage/> */}
    </div>
    <SendMessage/>
  </div>
  )
}

export default Messages
