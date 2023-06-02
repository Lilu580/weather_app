import { View, Text } from 'react-native';
import { styles } from './styles';
import WeatherIcon from '../../../assets/images/iconWeather.svg';

export const WeekForecastItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Monday</Text>
      <WeatherIcon width={40} height={40} />
      <View style={styles.temperaturesContainer}>
        <View style={[styles.temperaturesContainer, styles.day]}>
          <Text style={styles.text}>13</Text>
          <Text style={[styles.text, styles.celsius]}>°C</Text>
        </View>
        <View style={styles.temperaturesContainer}>
          <Text style={styles.nightText}>9</Text>
          <Text style={[styles.nightText, styles.celsius]}>°C</Text>
        </View>
      </View>
    </View>
  );
};
