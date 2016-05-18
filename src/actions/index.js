import axios from 'axios';

const API_KEY = 'b662d0f37db286e0cc014da5b5af5e01';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export cosnt FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},uk`
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
