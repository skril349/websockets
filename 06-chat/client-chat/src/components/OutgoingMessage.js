import React from 'react'
import { horaMes } from '../helpers/horaMes'
const OutgoingMessage = (props) => {
  const {msg} = props
  console.log(msg)
  return (
    <div className="outgoing_msg">
        <div className="sent_msg">
          <p>{msg.mensaje}</p>
          <span className="time_date"> {horaMes(msg.createdAt)}</span>
        </div>
      </div>
  )
}

export default OutgoingMessage
