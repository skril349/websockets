import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import {SaveOutlined} from '@ant-design/icons'
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


const Ingresar = () => {

  
  
  return (
    <Form
    name="basic"
    labelCol={{
      span: 4,
    }}
    wrapperCol={{
      span: 14,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Nombre de la gente"
      name="Nombre de la gente"
      rules={[
        {
          required: true,
          message: 'Porfavor ingrese su nombre!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="escritorio"
      name="escritorio"
      rules={[
        {
          required: true,
          message: 'Introduce su escritorio!',
        },
      ]}
    >
      <InputNumber min={1} max={99} />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" shape='round'>
      <SaveOutlined />
        Ingresar
      </Button>
    </Form.Item>
  </Form>
  )
}

export default Ingresar
