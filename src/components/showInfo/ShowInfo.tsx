import { View, Text } from 'react-native';
import { styles } from './styles';
import { useAppSelector } from '../../app/hooks';

export const ShowInfo = () => {
  const { weather, loading, error } = useAppSelector((state) => state.weather);
  const isWeatherAviable = weather && !loading && !error;

  return (
    <View style={styles.container}>
      {isWeatherAviable && (
        <>
          <Text style={styles.text}>{weather.current.temp_c}º</Text>

          <View style={styles.infoContainer}>
            <Text style={styles.textInfo}>Precipitations</Text>

            <Text style={styles.textInfo}>
              Max.: {weather.forecast.forecastday[0].day.maxtemp_c}º Min.:{' '}
              {weather.forecast.forecastday[0].day.mintemp_c}º
            </Text>
          </View>
        </>
      )}
    </View>
  );
};
