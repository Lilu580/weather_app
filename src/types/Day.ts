import { Condition } from './Condition';

export interface Day {
  condition: Condition;
  maxtemp_c: number;
  mintemp_c: number;
}
