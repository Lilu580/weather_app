import { View, Text } from 'react-native';
import { styles } from './styles';
import WeatherIcon from '../../../assets/images/iconWeather.svg';

type Props = {
  weekDay: string;
  day: string;
};

export const WeekForecastItem: React.FC<Props> = ({ weekDay, day }) => {
  const formattedDate = new Date().toISOString().split('T')[0];
  const style = [];
  style.push(styles.container);

  if (formattedDate === day) {
    style.push(styles.isActive);
  }

  return (
    <View style={style}>
      <Text style={styles.text}>{weekDay}</Text>
      <View style={styles.imageAndInfoContainer}>
        <WeatherIcon width={40} height={40} style={styles.weatherIcon} />
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
    </View>
  );
};
