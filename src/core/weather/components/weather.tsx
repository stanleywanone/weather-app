import { FC, useEffect } from 'react';
import { useGetWeather } from '../hooks/get';

export const Weather: FC = () => {
  const { weatherData, getWeather } = useGetWeather();

  useEffect(() => {
    getWeather('London');
  }, []);

  return (
    <div>
      {' '}
      In London, the temperature is {weatherData && weatherData?.main?.temp}
    </div>
  );
};
