import { View, Text } from 'react-native';
import { styles } from './styles';
import { WeekForecastItem } from '../WeekForecastItem';

export const WeekForecastList = () => {
  return (
    <View style={styles.container}>
      <WeekForecastItem />
      <WeekForecastItem />
      <WeekForecastItem />
      <WeekForecastItem />
      <WeekForecastItem />
      <WeekForecastItem />
      <WeekForecastItem />
    </View>
  );
};
