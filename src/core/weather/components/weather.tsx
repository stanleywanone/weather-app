import { FC } from 'react';
import { Row, Col, Input, Layout, Typography } from 'antd';
import 'antd/dist/antd.css';
import { useGetWeather } from '../hooks/get';

const { Content } = Layout;
const { Text } = Typography;

export const Weather: FC = () => {
  const { temperature, getWeather, setTemFormat } = useGetWeather();

  return (
    <Layout style={{ height: '100%', display: 'flex' }}>
      <Content
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Row justify="center">
          <Col style={{ fontSize: '36px' }}>
            {temperature ? temperature : '--'}{' '}
            <Text
              style={{ cursor: 'pointer' }}
              onClick={() => setTemFormat(true)}
            >
              <sup>o</sup>F
            </Text>
            <Text>/</Text>
            <Text
              style={{ cursor: 'pointer' }}
              onClick={() => setTemFormat(false)}
            >
              <sup>o</sup>C
            </Text>
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <Input placeholder="Enter a city..." onPressEnter={getWeather} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
