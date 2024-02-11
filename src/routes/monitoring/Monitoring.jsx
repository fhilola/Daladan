import './Monitoring.scss'
import { LineChart } from '@mui/x-charts/LineChart';
import React, { useState } from 'react';
import { Select, DatePicker } from 'antd';
const provinceData = ['Kunlik', 'Haftalik', 'Oylik'];

const Monitoring = () => {
  const onChange = (date, dateString) => {
  console.log(date, dateString);
};
  return (
    <section className='monitoring'>
      <h2>Monitoring</h2>
      <div className="monitoring-actions">
        <h3>Kunlik</h3>
        <div className='actions'>
            <Select
            className='select'
              defaultValue={provinceData[0]}
              options={provinceData.map((province) => ({
                label: province,
                value: province,
              }))}
            />
            <DatePicker 
            onChange={onChange}
            style={{
              width: '34px',
              padding: '10px 5px',
              backgroundColor: 'var(--primary-green-color)',
              border: 'none',
              }}
             />
        </div>
      </div>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
        series={[
          {
            data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
            showMark: ({ index }) => index % 2 === 0,
          },
        ]}
        width={1200}
        height={600}
      />
    </section>
  );
};

export default Monitoring;