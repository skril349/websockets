import React, { useContext } from 'react'
import SidebarChatItem from './SidebarChatItem'
import { ChatContext } from '../context/chat/ChatContext'
import { AuthContext } from '../auth/AuthContext'

const Sidebar = () => {

  const {chatState}= useContext(ChatContext)
  const {auth} = useContext(AuthContext)
  const {uid} = auth
  console.log(chatState)
  return (
    <div className="inbox_chat">

    {
        chatState.usuarios.filter(user => user.uid !== uid).map((usuario)=>(
        <SidebarChatItem key={usuario.uid} usuario={usuario}/>
        ))
    }

    <div className="extra_space"></div>


</div>
  )
}

export default Sidebar
