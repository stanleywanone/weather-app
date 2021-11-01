import { FC } from 'react';
import { Row, Col, Input } from 'antd';
import 'antd/dist/antd.css';
import { useGetWeather } from '../hooks/get';

export const Weather: FC = () => {
  const { weatherData, getWeather } = useGetWeather();

  return (
    <>
      <Row justify="center">
        <Col span={8}>The temperature is {weatherData.main?.temp}</Col>
      </Row>
      <Row justify="center">
        <Col span={8}>
          <Input placeholder="input search text" onPressEnter={getWeather} />
        </Col>
      </Row>
    </>
  );
};
