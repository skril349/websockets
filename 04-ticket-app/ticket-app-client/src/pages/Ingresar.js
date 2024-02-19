import React, { useState } from 'react';
import { Button, Divider, Form, Input, InputNumber, Typography } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { Navigate, useNavigate } from 'react-router-dom'; // Updated import
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';


const { Title, Text } = Typography;

const Ingresar = () => {

  useHideMenu(false)
  const navigate = useNavigate(); // Updated to use useNavigate
  const [usuario]=useState(getUsuarioStorage())

  const onFinish = ({agente,escritorio}) => {
    localStorage.setItem("agente",agente)
    localStorage.setItem("escritorio",escritorio)

    navigate('/escritorio'); // Add the path you want to navigate to
  
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if(usuario.agente && usuario.escritorio){
    return <Navigate to="/escritorio" replace />
  }
  return (
    <>
      <Title level={2}>Ingresar</Title>
      <Text>Ingrese su nombre y numero de escritorio</Text>
      <Divider />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="agente"
          name="agente"
          rules={[{ required: true, message: 'Porfavor ingrese su nombre!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="escritorio"
          name="escritorio"
          rules={[{ required: true, message: 'Introduce su escritorio!' }]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>
        <Form.Item
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Button type="primary" htmlType="submit" shape='round'>
            <SaveOutlined />
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Ingresar;
