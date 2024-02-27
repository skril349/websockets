import React, { useContext } from 'react'
import SendMessage from './SendMessage'
import IncommingMessage from './IncommingMessage'
import OutgoingMessage from './OutgoingMessage'
import { ChatContext } from '../context/chat/ChatContext'
import { AuthContext } from '../auth/AuthContext'

const Messages = () => {

  const {chatState} = useContext(ChatContext)
  const {auth} = useContext(AuthContext)

  return (
    <div className="mesgs">
    <div className="msg_history">
        {
            chatState.mensajes.map((msg)=>(
                ( msg.para === auth.uid)
                ?<IncommingMessage key={msg._id}/>
                :<OutgoingMessage key={msg._id}/>
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
