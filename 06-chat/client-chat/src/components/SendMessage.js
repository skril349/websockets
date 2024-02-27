import React, { useState } from 'react'

const SendMessage = () => {


    const [message, setMessage] = useState('')

    const onChange = ({target}) =>{
        setMessage(target.value)
    }
    const onSubmit = (ev) =>{
        ev.preventDefault()

        if(message.length === 0) {return}

        console.log(message)
        setMessage('')

        //TODO: Emitir al backend sockets para enviar mensaje
        
    }


    return (
        <form onSubmit={onSubmit}>
            <div className="type_msg row">
                <div className="input_msg_write col-sm-9">
                    <input type="text" className="write_msg" placeholder="Mensaje..." value={message} onChange={onChange}/>
                </div>
                <div className="col-sm-3 text-center">
                    <button className="msg_send_btn mt-3" type="submit">
                        enviar
                    </button>
                </div>
            </div>
        </form>
    )
}

export default SendMessage
