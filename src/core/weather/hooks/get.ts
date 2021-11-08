import {
  useState,
  KeyboardEvent,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
import useFetch from 'use-http';
import { GET_WEATHER_API } from '../api/getWeather';

interface UseGetWeatherReturn {
  getWeather: (e: KeyboardEvent) => Promise<any>;
  setTemFormat: Dispatch<SetStateAction<boolean>>;
  temperature: string;
  tempColor: string;
}

export const useGetWeather = (): UseGetWeatherReturn => {
  const { get, response } = useFetch(GET_WEATHER_API);

  const [weatherData, setWeatherData] = useState(null);
  const [tempFormat, setTemFormat] = useState(true);
  const [tempColor, setTempColor] = useState('');

  const getWeather = async (e: KeyboardEvent): Promise<any> => {
    const city = (e.target as HTMLInputElement).value;

    const initWeather = await get(
      `/weather?q=${city}&units=imperial&APPID=f5c55a4ba83bf739056e0ec82f7f7966`
    );

    if (response.ok) setWeatherData(initWeather);
  };

  const fahrenheitToCelcius = (f: number): string => {
    return f ? (((f - 32) * 6) / 9).toFixed(1).toString() : null;
  };

  useEffect(() => {
    const temp = weatherData?.main.temp;
    switch (true) {
      case temp >= 77:
        setTempColor('linear-gradient(to top, yellow, red)');
        break;
      case 50 <= temp:
        setTempColor('linear-gradient(to top, white, lightskyblue)');
        break;
      case temp < 50:
        setTempColor('linear-gradient(to top, white, silver)');
        break;
    }
  });

  return {
    temperature: tempFormat
      ? weatherData?.main.temp.toFixed(1)
      : fahrenheitToCelcius(weatherData?.main.temp),
    getWeather,
    setTemFormat,
    tempColor,
  };
};
