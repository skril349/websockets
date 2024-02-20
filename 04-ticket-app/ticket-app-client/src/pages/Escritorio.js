import { ArrowLeftOutlined, ArrowRightOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Typography } from 'antd'
import React, { useContext, useState } from 'react'
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';
import { Navigate, useNavigate } from 'react-router-dom';
import { SocketContext } from '../context/SocketContext';

const { Title, Text } = Typography;

const Escritorio = () => {
  useHideMenu(false)
  const {socket} = useContext(SocketContext)
  const [ticket,setTicket] = useState(null)
  const [usuario]=useState(getUsuarioStorage())
  const navigate = useNavigate(); // Updated to use useNavigate

  const salir = () => {
    console.log("salir")
    localStorage.clear()
    navigate("/ingresar")
  }

  const siguienteTicket = () => {
    socket.emit("siguiente-ticket-trabajar",usuario, (ticket) =>{
      setTicket(ticket)
    })
  }

  if(!usuario.agente || !usuario.escritorio){
    return <Navigate to="/ingresar" replace />
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{usuario.agente}</Title>
          <Text>Usted trabaja en el escritorio: </Text>
          <Text type='success'>{usuario.escritorio}</Text>
        </Col>
        <Col span={4} align="right">
          <Button shape='round' type='primary' danger onClick={()=>salir()}>
            <CloseCircleOutlined />
          </Button>
        </Col>
      </Row>
      <Divider />

      {
        ticket &&(
          <Row>
        <Col>
          <Text>Esta atendiendo el ticket numero : </Text>
          <Text style={{ fontSize: 30 }} type='danger'>{ticket.number}</Text>
        </Col>
      </Row>
        )
      }

      <Row>
        <Col offset={18} span={6} align="right">
          <Button shape='round' type='primary' onClick={()=>siguienteTicket()}> <ArrowRightOutlined/>Siguiente</Button>
        </Col>
      </Row>
    </>
  )
}

export default Escritorio
