import { Card, Col, Divider, List, Row,Tag,Typography } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { useHideMenu } from '../hooks/useHideMenu';
import { SocketContext } from '../context/SocketContext';

const { Title, Text } = Typography;

const Cola = () => {

  useHideMenu(true)
  const {socket} = useContext(SocketContext)
  const [tickets, setTickets] = useState([])

  useEffect(()=>{
    socket.on("ticket-asignado",(asignados)=>{
      console.log(asignados)
      setTickets(asignados)
    })
  },[tickets])

  return (
    <>
      <Title level={1}>
        Atendiendo al cliente
      </Title>
      <Row>
        <Col span={12}>
          <List 
          dataSource={tickets.slice(0,3)}
          renderItem={ item => (
            <List.Item>
              <Card
              style={{width:300, marginTop:16}}
              actions={[
                <Tag color='volcano'>{item.agente}</Tag>,
                <Tag color='magenta'>Escritorio {item.escritorio}</Tag>

              ]}
              >
                <Title>No. {item.number}</Title>
              </Card>
            </List.Item>
          ) }

          />

        </Col>
        <Col span={12}>
              <Divider>
                Historial:
              </Divider>
              <List
              dataSource={tickets.slice(3)}
              renderItem={item =>(
                <List.Item.Meta
                title = {`ticket No. ${item.number}`}
                description={
                  <>
                    <Text>En el escritorio</Text>
                    <Tag color='magenta'>{item.escritorio}</Tag>
                    <Text>Agente: </Text>
                    <Tag color='volcano'>{item.agente}</Tag>
                  </>
                }
                >

                </List.Item.Meta>
              )}
              >

              </List>
        </Col>
      </Row>
    </>
  )
}

export default Cola
