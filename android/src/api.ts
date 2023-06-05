const WEATHER_URL =
  'http://api.weatherapi.com/v1/forecast.json?key=3012624f110a4b4d97d103408230206';
const CITIES_URL =
  'http://api.weatherapi.com/v1/search.json?key=3012624f110a4b4d97d103408230206';
const HISTORY_URL =
  'http://api.weatherapi.com/v1/history.json?key=3012624f110a4b4d97d103408230206';
const FUTURE_URL =
  'http://api.weatherapi.com/v1/future.json?key=3012624f110a4b4d97d103408230206';

function wait(delay: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function get(baseUrl: string, url: string) {
  const fullURL = baseUrl + url;

  return wait(300)
    .then(() => fetch(fullURL))
    .then((res) => res.json());
}

export const getWeather = (city: string) =>
  get(WEATHER_URL, `&q=${city}&days=14&aqi=no&alerts=yes`);
export const getCities = (query: string) => get(CITIES_URL, `&q=${query}`);
export const getHistoryWeather = (city: string, date: string) =>
  get(HISTORY_URL, `&q=${city}&dt=${date}`);
export const getFutureWeather = (city: string, date: string) =>
  get(FUTURE_URL, `&q=${city}&dt=${date}`);
