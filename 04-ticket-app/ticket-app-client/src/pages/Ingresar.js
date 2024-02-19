import React from 'react';
import { Button, Divider, Form, Input, InputNumber, Typography } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'; // Updated import


const { Title, Text } = Typography;

const Ingresar = () => {
  const navigate = useNavigate(); // Updated to use useNavigate

  const onFinish = (values) => {
    console.log('Success:', values);
    navigate('/escritorio'); // Add the path you want to navigate to
  
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
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
          label="Nombre de la gente"
          name="Nombre de la gente"
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
