import { Location } from './Location';
import { CurrentWeather } from './CurrentWeather.1';
import { Forecast } from './Forecast';

export interface WeatherData {
  location: Location;
  current: CurrentWeather;
  forecast: Forecast;
}
