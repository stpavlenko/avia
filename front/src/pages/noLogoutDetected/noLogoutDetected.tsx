import { useState } from 'react';

import { Button, Flex, Form, Radio, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const { Text } = Typography;

const NoLogoutDetected = () => {
  const [date, _setDate] = useState('00:00');

  return (
    <Flex vertical gap="middle">
      <Text>No logout detected from your last login on {date}</Text>
      <Form autoComplete="off">
        <Form.Item label="Reason">
          <TextArea rows={4}></TextArea>
        </Form.Item>
        <Form.Item>
          <Radio.Group>
            <Radio value="soft">SoftWare crash</Radio>
            <Radio value="sys">System crash</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button>Confirm</Button>
        </Form.Item>
      </Form>
    </Flex>
  );
};

export default NoLogoutDetected;
