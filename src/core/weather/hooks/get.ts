import { useState, KeyboardEvent } from 'react';
import useFetch from 'use-http';
import { GET_WEATHER_API } from '../api/getWeather';

interface UseGetWeatherReturn {
  weatherData: any;
  getWeather: (e: KeyboardEvent) => Promise<any>;
  fahrenheitToCelcius: (f: number) => string;
}

export const useGetWeather = (): UseGetWeatherReturn => {
  const { get, response } = useFetch(GET_WEATHER_API);

  const [weatherData, setWeatherData] = useState({});

  const getWeather = async (e: KeyboardEvent): Promise<any> => {
    const city = (e.target as HTMLInputElement).value;

    const initWeather = await get(
      `/weather?q=${city}&units=imperial&APPID=f5c55a4ba83bf739056e0ec82f7f7966`
    );

    if (response.ok) setWeatherData(initWeather);
  };

  const fahrenheitToCelcius = (f: number): string => {
    return (((f - 32) * 6) / 9).toString();
  };

  return {
    weatherData,
    getWeather,
    fahrenheitToCelcius,
  };
};
