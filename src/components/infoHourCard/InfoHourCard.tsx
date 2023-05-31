import { View, Text } from 'react-native';
import { styles } from './styles';
import WeatherICon from '../../../assets/images/iconWeather.svg';

export const InfoHourCard = () => {
  return (
    <>
    <View style={[styles.container, styles.isActive]}>
      <Text style={styles.text}>24°C</Text>
      <WeatherICon height={30} width={30}/>
      <Text style={styles.text}>17:00</Text>
    </View>
  </>
  )
};