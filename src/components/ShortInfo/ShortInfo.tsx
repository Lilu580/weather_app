import { View, Text } from 'react-native';
import { styles } from './styles';
import Drops from '../../../assets/images/drops.svg';
import Mild from '../../../assets/images/mild.svg';
import Wind from '../../../assets/images/windy.svg';
import { useAppSelector } from '../../app/hooks';

export const ShortInfo = () => {
  const { weather, loading, error } = useAppSelector((state) => state.weather);

  const isAviable = weather && !loading && !error;

  return (
    <View style={styles.container}>
      {isAviable && (
        <>
          <View style={styles.infoContainer}>
            <Drops width={30} height={30} />
            <Text style={styles.infoText}>
              {weather.forecast.forecastday[0].day.daily_chance_of_rain}{' '}
            </Text>
          </View>

          <View style={styles.infoContainer}>
            <Mild width={30} height={30} />
            <Text style={styles.infoText}> {weather.current.feelslike_c} </Text>
          </View>

          <View style={styles.infoContainer}>
            <Wind width={30} height={30} />
            <Text style={styles.infoText}>
              {' '}
              {weather.current.wind_kph}km/h{' '}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};
