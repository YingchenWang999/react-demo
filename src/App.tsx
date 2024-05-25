import React from 'react';
import { Select, Space } from 'antd';

import Hello from './components/Hello';

const App: React.FC = () => {
  let count = 1;

  const handleChange = (value: string) => {
    count++;

    console.log(`selected ${value}`, count);
  };

  return (
    <>
      <Hello></Hello>
      <Space wrap>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled', disabled: true },
          ]}
        />
        <Select defaultValue="lucy" style={{ width: 120 }} disabled options={[{ value: 'lucy', label: 'Lucy' }]} />
        <Select defaultValue="lucy" style={{ width: 120 }} loading options={[{ value: 'lucy', label: 'Lucy' }]} />
        <Select defaultValue="lucy" style={{ width: 120 }} allowClear options={[{ value: 'lucy', label: 'Lucy' }]} />
      </Space>

      <div>{count}</div>
    </>
  );
};

export default App;
