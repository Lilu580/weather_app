import { View, Text } from 'react-native';
import { styles } from './styles';
import WeatherICon from '../../../assets/images/iconWeather.svg';

type Props = {
  isActive: boolean,
}
export const InfoHourCard = ({isActive}: Props) => {
  const containerStyles = [];

  containerStyles.push(styles.container);

  if (isActive) {
    containerStyles.push(styles.isActive);
  }

  return (
    <>
    <View style={containerStyles}>
      <Text style={styles.text}>24°C</Text>
      <WeatherICon height={30} width={30}/>
      <Text style={styles.text}>17:00</Text>
    </View>
  </>
  )
};