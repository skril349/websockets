import React, { useContext } from 'react'
import { ChatContext } from '../context/chat/ChatContext'
import { types } from '../types/types'

const SidebarChatItem = (props) => {
  const {usuario} = props
  const {dispatch, chatState} = useContext(ChatContext)
  const {chatActivo} = chatState
  const onCLick = () =>{
    dispatch({
      type:types.activarChat,
      payload: usuario.uid
    })
  }

  return (
    <div className={`chat-list ${(usuario.uid === chatActivo)&& 'active_chat'}` }
    onClick={onCLick}>

        <div className="chat_people">
            <div className="chat_img"> 
                <img src="https://www.odoo.com/web/image/res.users/1594444/image_1024?unique=b1cd4b9" alt="sunil" />
            </div>
            <div className="chat_ib">
                <h5>{usuario.nombre}</h5>
                {
                  usuario.online ? (
                    <span className="text-success">Online</span>
                  ):(
                    <span className="text-danger">Offline</span>

                  )
                }
                
            </div>
        </div>
    </div>
  )
}

export default SidebarChatItem
