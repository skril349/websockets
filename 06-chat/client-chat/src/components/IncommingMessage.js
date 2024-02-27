import React from 'react'
import { horaMes } from '../helpers/horaMes'

const IncommingMessage = (props) => {
  const {msg} = props

  horaMes(msg.createdAt)
  
  return (
    <div className="incoming_msg">
        <div className="incoming_msg_img">
          <img src="https://www.odoo.com/web/image/res.users/1594444/image_1024?unique=b1cd4b9" alt="sunil" />
        </div>
        <div className="received_msg">
          <div className="received_withd_msg">
            <p>{msg.mensaje}</p>
            <span className="time_date"> {horaMes(msg.createdAt)}</span>
          </div>
        </div>
      </div>
  )
}

export default IncommingMessage
