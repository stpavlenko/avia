import { useState } from 'react';

import { Button, Flex, Table, Typography } from 'antd';

import data from '../tableData';

const { Text } = Typography;

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Login Time',
    dataIndex: 'loginTime',
    key: 'loginTime',
  },
  {
    title: 'Logout Time',
    dataIndex: 'logoutTime',
    key: 'logoutTime',
  },
  {
    title: 'Time spent on system',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Unsuccessful logout reason',
    dataIndex: 'logoutReason',
    key: 'logoutReason',
  },
];

const User = () => {
  const [userName, _setUserName] = useState('username');
  const [time, _setTime] = useState('00:00');
  const [crashes, _setCrashes] = useState('0');

  return (
    <>
      <Flex vertical align="flex-start" gap="middle">
        <Button>Exit</Button>
        <Text>Hi {userName}, Welcome to AMONIC Airlines Automation System</Text>
        <Text>Time spent on system: {time}</Text>
        <Text>Number of crashes: {crashes}</Text>

        <Table dataSource={data} columns={columns} />
      </Flex>
    </>
  );
};

export default User;
