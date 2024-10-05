import React from 'react';

import type { FormProps } from 'antd';
import { Button, Form, Input, Space } from 'antd';

import './login.scss';

type FieldType = {
  username?: string;
  password?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Login: React.FC = () => (
  <Form
    style={{ maxWidth: 600, marginInline: 'auto', marginTop: '5rem' }}
    className="login-form"
    labelCol={{ span: 4 }}
    wrapperCol={{ span: 16 }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <img className="login-form__img" src="/img/logo.png" alt="" />

    <Form.Item<FieldType>
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8 }}>
      <Space>
        <Button type="primary" htmlType="submit">
          Login
        </Button>

        <Button>Exit</Button>
      </Space>
    </Form.Item>
  </Form>
);

export default Login;
