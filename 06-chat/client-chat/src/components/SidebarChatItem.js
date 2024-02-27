import React from 'react'

const SidebarChatItem = (props) => {
  const {usuario} = props
  return (
    <div className="chat_list active_chat">
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
