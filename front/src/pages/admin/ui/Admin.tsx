import { useState } from 'react';

import { Button, DatePicker, Flex, Form, Input, Modal, Radio, Select, Space, Table, Typography } from 'antd';

import { data } from '../tableData';

const { Text } = Typography;

const offices = [{ value: 'sample', label: <span>sample</span> }];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'User Role',
    dataIndex: 'userRole',
    key: 'userRole',
  },
  {
    title: 'Email Address',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Office',
    dataIndex: 'office',
    key: 'office',
  },
];

const Admin = () => {
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isChangeRoleModalOpen, setIsChangeRoleModalOpen] = useState(false);

  return (
    <>
      <Flex vertical gap="small">
        <Space>
          <Button onClick={() => setIsAddUserModalOpen(true)}>Add user</Button>
          <Button>Exit</Button>
        </Space>

        <Flex align="center" gap="small">
          <Text>Office</Text>
          <Select size="middle" options={offices} defaultValue="sample" />
        </Flex>

        <Table dataSource={data} columns={columns} rowSelection={{ type: 'radio' }} />

        <Space>
          <Button onClick={() => setIsChangeRoleModalOpen(true)}>Change role</Button>
          <Button>Enable/Disable Login</Button>
        </Space>
      </Flex>

      <Modal title="Add User" open={isAddUserModalOpen} onCancel={() => setIsAddUserModalOpen(false)}>
        <Form autoComplete="off">
          <Form.Item label="Email" rules={[{ required: true, message: 'Please input email!' }]}>
            <Input type="email" />
          </Form.Item>

          <Form.Item label="First name" rules={[{ required: true, message: 'Please input first name!' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Last name" rules={[{ required: true, message: 'Please input last name!' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Office" rules={[{ required: true, message: 'Please select office!' }]}>
            <Select size="middle" options={offices} defaultValue="sample" />
          </Form.Item>

          <Form.Item label="Birthdate" rules={[{ required: true, message: 'Please input birthdate!' }]}>
            <DatePicker />
          </Form.Item>

          <Form.Item label="Password" rules={[{ required: true, message: 'Please input password!' }]}>
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>

      <Modal title="Change role" open={isChangeRoleModalOpen} onCancel={() => setIsChangeRoleModalOpen(false)}>
        <Form autoComplete="off">
          <Form.Item label="Email" rules={[{ required: true, message: 'Please input email!' }]}>
            <Input type="email" />
          </Form.Item>

          <Form.Item label="First name" rules={[{ required: true, message: 'Please input first name!' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Last name" rules={[{ required: true, message: 'Please input last name!' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Office" rules={[{ required: true, message: 'Please select office!' }]}>
            <Select size="middle" options={offices} defaultValue="sample" />
          </Form.Item>

          <Form.Item label="Role">
            <Radio.Group>
              <Radio value="user">User</Radio>
              <Radio value="admin">Admin</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Admin;
