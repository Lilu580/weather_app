import { Condition } from './Condition';

export interface Hour {
  condition: Condition;
  temp_c: number;
  time: string;
}
