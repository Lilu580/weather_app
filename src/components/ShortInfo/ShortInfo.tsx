import { View, Text } from 'react-native';
import { styles } from './styles';
import Drops from '../../../assets/images/drops.svg';
import Mild from '../../../assets/images/mild.svg';
import Wind from '../../../assets/images/windy.svg';

export const ShortInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Drops width={30} height={30} />
        <Text style={styles.infoText}> 6% </Text>
      </View>
      <View style={styles.infoContainer}>
        <Mild width={30} height={30} />
        <Text style={styles.infoText}> 49% </Text>
      </View>
      <View style={styles.infoContainer}>
        <Wind width={30} height={30} />
        <Text style={styles.infoText}> 19km/h </Text>
      </View>
    </View>
  );
};
