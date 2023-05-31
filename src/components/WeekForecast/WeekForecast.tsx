import { View, Text } from 'react-native';
import { styles } from './styles';
import Calendar from '../../../assets/images/calendar.svg';
import { WeekForecastList } from '../WeekForecastList';

export const WeekForecast = () => {
  return ( 
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Next Forecast</Text>
        <Calendar width={30} height={30}></Calendar>
      </View>
      <WeekForecastList />
    </View>
  );
};