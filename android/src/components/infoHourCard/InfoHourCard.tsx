import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import WeatherICon from '../../../assets/images/iconWeather.svg';
import { useAppSelector } from '../../app/hooks';

type Props = {
  hour: number;
};
export const InfoHourCard = ({ hour }: Props) => {
  const containerStyles = [];
  const { weather, loading, error } = useAppSelector((state) => state.weather);
  const currentHourWeather = weather?.forecast.forecastday[0].hour[hour];
  const isAviable = currentHourWeather && !loading && !error;
  let currentTime = `0${hour}:00`;

  if (currentTime.length > 5) {
    currentTime = currentTime.slice(1);
  }

  const localTime = new Date();

  containerStyles.push(styles.container);

  if (localTime.getHours() === hour) {
    containerStyles.push(styles.isActive);
  }
  const icon = weather?.forecast.forecastday[0].hour[hour].condition.icon;

  return (
    <>
      <View style={containerStyles}>
        {isAviable && (
          <>
            <Text style={styles.text}>{currentHourWeather.temp_c}°C</Text>

            {icon && (
              <Image
                source={{ uri: `https:${icon}` }}
                style={{ width: 50, height: 50 }}
              />
            )}

            <Text style={styles.text}>{currentTime}</Text>
          </>
        )}
      </View>
    </>
  );
};
