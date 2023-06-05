import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import CalendarSvg from '../../../assets/images/calendar.svg';
import { WeekForecastList } from '../WeekForecastList';
import { useAppDispatch } from '../../app/hooks';
import { setOpen } from '../../features/calendar';

export const WeekForecast = () => {
  const dispatch = useAppDispatch();

  const handlePress = () => {
    dispatch(setOpen(true));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Next Forecast</Text>
  
        <TouchableOpacity onPress={handlePress}>
          <CalendarSvg width={30} height={30} />
        </TouchableOpacity>
      </View>
      <WeekForecastList />
    </View>
  );
};
