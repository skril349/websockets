import React from 'react'
import "../css/chat.css"
import InboxPeople from '../components/InboxPeople';
export const ChatPage = () => {
  return (
    <div className="messaging">
      <div className="inbox_msg">
      <InboxPeople/>

        {/* <!-- Chat inicio --> */}
        <div className="mesgs">

          {/* <!-- Historia inicio --> */}
          <div className="msg_history">
            {/* <!-- Mensaje recibido Inicio --> */}
            <div className="incoming_msg">
              <div className="incoming_msg_img">
                <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
              </div>
              <div className="received_msg">
                <div className="received_withd_msg">
                  <p>Test which is a new approach to have all
                    solutions</p>
                  <span className="time_date"> 11:01 AM | June 9</span>
                </div>
              </div>
            </div>
            {/* <!-- Mensaje recibido Fin --> */}

            {/* <!-- Mensaje enviado inicio --> */}
            <div className="outgoing_msg">
              <div className="sent_msg">
                <p>Test which is a new approach to have all
                  solutions</p>
                <span className="time_date"> 11:01 AM | June 9</span>
              </div>
            </div>
            {/* <!-- Mensaje enviado inicio --> */}



          </div>
          {/* <!-- Historia Fin --> */}

          {/* <!-- Enviar mensaje Inicio --> */}
          <div className="type_msg row">
            <div className="input_msg_write col-sm-9">
              <input type="text" className="write_msg" placeholder="Mensaje..." />
            </div>
            <div className="col-sm-3 text-center">
              <button className="msg_send_btn mt-3" type="button">
                enviar
              </button>
            </div>
          </div>
          {/* <!-- Enviar mensaje Fin --> */}

        </div>
        {/* <!-- Chat Fin --> */}

      </div>


    </div>
  )
}

