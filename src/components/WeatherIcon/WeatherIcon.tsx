import WeahterImage from '../../../assets/images/iconSun.svg';
import { useAppSelector } from '../../app/hooks';
import { styles } from './styles';
import { View } from 'react-native';

export const WeatherIcon = () => {
  const { weather } = useAppSelector((state) => state.weather);

  const icon = weather?.current.condition.icon;

  return (
    <View style={styles.container}>
      <WeahterImage width={140} height={140} />
    </View>
  );
};
