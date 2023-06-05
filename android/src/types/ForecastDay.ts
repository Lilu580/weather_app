import { Day } from './Day';
import { Hour } from './Hour';

export interface ForecastDay {
  date: string;
  day: Day;
  hour: Hour[];
}
