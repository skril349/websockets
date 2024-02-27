import React from 'react'

const IncommingMessage = (props) => {
  const {msg} = props
  return (
    <div className="incoming_msg">
        <div className="incoming_msg_img">
          <img src="https://www.odoo.com/web/image/res.users/1594444/image_1024?unique=b1cd4b9" alt="sunil" />
        </div>
        <div className="received_msg">
          <div className="received_withd_msg">
            <p>{msg.mensaje}</p>
            <span className="time_date"> 11:01 AM | June 9</span>
          </div>
        </div>
      </div>
  )
}

export default IncommingMessage
