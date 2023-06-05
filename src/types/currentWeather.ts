export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface Condition {
  icon: string;
}

export interface CurrentWeather {
  temp_c: number;
  condition: Condition;
  feelslike_c: number;
}

export interface Forecast {
  forecastday: ForecastDay[];
}

export interface ForecastDay {
  date: string;
  day: Day;
  hour: Hour[];
}

export interface Hour {
  condition: Condition;
  temp_c: number;
  time: string;
}

export interface Day {
  condition: Condition;
  maxtemp_c: number;
  mintemp_c: number;
}

export interface WeatherData {
  location: Location;
  current: CurrentWeather;
  forecast: Forecast;
}

export interface SelectedDate {
  currDate: string;
  day: string;
  weekDay: string;
}

export interface CityFromServer {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}

export interface SelectedCity {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}
