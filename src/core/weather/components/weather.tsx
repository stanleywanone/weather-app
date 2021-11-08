import { FC } from 'react';
import { Row, Col, Input, Layout, Typography } from 'antd';
import 'antd/dist/antd.css';
import { useGetWeather } from '../hooks/get';
import '../styles/weather.scss';

const { Content } = Layout;
const { Text } = Typography;

export const Weather: FC = () => {
  const { tempColor, temperature, getWeather, setTemFormat } = useGetWeather();

  return (
    <Layout className="layout">
      <Content className="content" style={{ backgroundImage: tempColor }}>
        <Row>
          <Col style={{ fontSize: '48px', color: 'white' }}>
            {temperature ? temperature : '--'}{' '}
            <Text className="text" onClick={() => setTemFormat(true)}>
              <sup>o</sup>F
            </Text>
            /
            <Text className="text" onClick={() => setTemFormat(false)}>
              <sup>o</sup>C
            </Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              className="input"
              placeholder="Enter a city..."
              onPressEnter={getWeather}
            />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
