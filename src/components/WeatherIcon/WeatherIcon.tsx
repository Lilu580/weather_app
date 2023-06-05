import WeahterImage from '../../../assets/images/iconSun.svg';
import { useAppSelector } from '../../app/hooks';
import { styles } from './styles';
import { View, Image } from 'react-native';

export const WeatherIcon = () => {
  const { weather } = useAppSelector((state) => state.weather);

  const icon = weather?.current.condition.icon;
  return (
    <View style={styles.container}>
      {icon && (
        <Image
          source={{ uri: `https:${icon}` }}
          style={{ width: 120, height: 120 }}
        />
      )}
    </View>
  );
};
