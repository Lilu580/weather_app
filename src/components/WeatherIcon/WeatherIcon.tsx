import WeahterImage from '../../../assets/images/iconSun.svg';
import { styles } from './styles';
import { View } from 'react-native';

export const WeatherIcon = () => {
  return (
    <View style={styles.container}>
      <WeahterImage width={140} height={140} />
    </View>
  )
}