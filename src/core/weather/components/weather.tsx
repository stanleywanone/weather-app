import { FC } from 'react';
import { Row, Col, Input } from 'antd';
import 'antd/dist/antd.css';
import { useGetWeather } from '../hooks/get';

export const Weather: FC = () => {
  const { weatherData, getWeather } = useGetWeather();

  return (
    <div
      style={{
        height: '500px',
        justifyContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
        alignContent: 'center',
        display: 'flex',
      }}
    >
      <Row justify="center">
        <Col>The temperature is {weatherData.main?.temp}</Col>
      </Row>
      <Row justify="center">
        <Col>
          <Input placeholder="input search text" onPressEnter={getWeather} />
        </Col>
      </Row>
    </div>
  );
};
