import { View, Text, Image } from 'react-native';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { styles } from './styles';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as forecastActions from '../../features/forecast';
import { WeatherData } from '../../types/currentWeather';


type Props = {
  weekDay: string;
  day: string;
};

export const WeekForecastItem: React.FC<Props> = ({ weekDay, day }) => {
  const style = [];
  const { SelectedCity } = useAppSelector(state => state.cities);
  const { history, future } = useAppSelector(state => state.forecast);
  const { weather } = useAppSelector(state => state.weather);
  const dispatch = useAppDispatch();
  const now = new Date();
  const formattedDate = now.toISOString().split('T')[0];
  const targetDate = new Date(day);
  const diffInDays = Math.floor((targetDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  let allPossibles;
  let currentDate;
  let dayTemperature;
  let nightTemp;
  let icon;

  const getFormatedArray = useCallback((formatingArray: WeatherData[]) => {
    return formatingArray.map(part => part.forecast.forecastday[0])
  }, [])
  const formatedHistory = history.map(part => part.forecast.forecastday[0]);
  const formatedFuture = future.map(part => part.forecast.forecastday[0]);

  useEffect(() => {
    if(day < formattedDate) {
      dispatch(forecastActions.getHistoryFromServer({selectedCity:SelectedCity.url, selectedDay:day}));
    } else if (diffInDays >= 13) {
      dispatch(forecastActions.getFutureFromServer({selectedCity:SelectedCity.url, selectedDay:day}));
    }
  }, []);


  if (weather) {
    allPossibles = [...formatedHistory, ...weather.forecast.forecastday, ...formatedFuture];
    currentDate = allPossibles.find(possible => possible.date === day);

    dayTemperature = currentDate?.day.maxtemp_c;
    nightTemp = currentDate?.day.mintemp_c;
    icon = currentDate?.day.condition.icon;
  }

  style.push(styles.container);

  if (formattedDate === day) {
    style.push(styles.isActive);
  }

  return (
    <View style={style}>
      <View style={styles.imageAndHeader}>
      <Text style={styles.text}>{weekDay}</Text>
        {icon && (
          <Image
            source={{ uri: `https:${icon}` }}
            style={{ width: 40, height: 40 }}
          />
        )}
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.temperaturesContainer}>
          <View style={[styles.temperaturesContainer, styles.day]}>
            {dayTemperature && (
              <Text style={styles.text}>{dayTemperature}</Text>
            )}

            <Text style={[styles.text, styles.celsius]}>°C</Text>
          </View>

          <View style={styles.temperaturesContainer}>
            {nightTemp && (
              <Text style={styles.nightText}>{nightTemp}</Text>
            )}
            
            <Text style={[styles.nightText, styles.celsius]}>°C</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
