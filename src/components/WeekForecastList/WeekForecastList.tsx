import { View, Text } from 'react-native';
import { styles } from './styles';
import { WeekForecastItem } from '../WeekForecastItem';
import { useAppSelector } from '../../app/hooks';

export const WeekForecastList = () => {
  const { selectedWeek } = useAppSelector(state => state.weeks);

  return (
    <View style={styles.container}>
      {selectedWeek.map(day => (
        <WeekForecastItem weekDay={day.weekDay} day={day.day}/>
      ))}
    </View>
  );
};
