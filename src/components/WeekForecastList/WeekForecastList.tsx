import { View, Text } from 'react-native';
import { useEffect } from 'react';
import { styles } from './styles';
import { WeekForecastItem } from '../WeekForecastItem';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as forecastActions from '../../features/forecast';

export const WeekForecastList = () => {
  const { selectedWeek } = useAppSelector(state => state.weeks);
  const { SelectedCity } = useAppSelector(state => state.cities);
  const dispatch = useAppDispatch();

  useEffect(() => {
    {
      dispatch(forecastActions.clearForecast());
    }
  }, [selectedWeek]);

  return (
    <>
      {!selectedWeek && (
        <Text></Text>
      )}
      <View style={styles.container}>
        {selectedWeek.map(({weekDay, day}) => (
          <WeekForecastItem weekDay={weekDay} day={day} key={day}/>
        ))}
      </View>
    </>
  );
};
