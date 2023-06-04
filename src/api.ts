// eslint-disable-next-line max-len
const BASE_URL =
  'http://api.weatherapi.com/v1/forecast.json?key=3012624f110a4b4d97d103408230206';
const URL_CITIES = 
  'http://api.weatherapi.com/v1/search.json?key=3012624f110a4b4d97d103408230206';

// This function creates a promime
// that is resolved after a given delay
function wait(delay: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function get(baseUrl: string ,url: string) {
  const fullURL = baseUrl + url;
  return wait(300)
    .then(() => fetch(fullURL))
    .then((res) => res.json());
}

export const getWeather = (city: string) => get(BASE_URL,`&q=${city}&aqi=no`);
export const getCities = (query: string) => get(URL_CITIES,`&q=${query}`);