import { View, Text } from 'react-native';
import { styles } from './styles';
import { InfoHourCard } from '../infoHourCard';

export const InfoCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <Text style={[styles.headerText, styles.headerTextTitle]}>
          Today
        </Text>
        <Text style={styles.headerText}>
          Mar, 9
        </Text>
      </View>
      <InfoHourCard />
    </View>
  )
}