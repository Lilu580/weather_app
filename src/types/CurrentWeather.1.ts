import { Condition } from './Condition';

export interface CurrentWeather {
  temp_c: number;
  condition: Condition;
  feelslike_c: number;
}
