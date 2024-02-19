import { ArrowLeftOutlined, ArrowRightOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Typography } from 'antd'
import React from 'react'
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;

const Escritorio = () => {
  useHideMenu(false)


  const salir = () => {
    console.log("salir")
  }

  const siguienteTicket = () => {
    console.log("siguienteTicket")
  }
  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>Fernando</Title>
          <Text>Usted trabaja en el escritorio: </Text>
          <Text type='success'>5</Text>
        </Col>
        <Col span={4} align="right">
          <Button shape='round' type='primary' danger onClick={salir}>
            <CloseCircleOutlined />
          </Button>
        </Col>
      </Row>
      <Divider />

      <Row>
        <Col>
          <Text>Esta atendiendo el ticket numero : </Text>
          <Text style={{ fontSize: 30 }} type='danger'>55</Text>
        </Col>
      </Row>

      <Row>
        <Col offset={18} span={6} align="right">
          <Button shape='round' type='primary' onClick={siguienteTicket}> <ArrowRightOutlined/>Siguiente</Button>
        </Col>
      </Row>
    </>
  )
}

export default Escritorio
