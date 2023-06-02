import { View, Text } from 'react-native';
import { styles } from './styles';
import { InfoHourCard } from '../infoHourCard';
import { ListOfHourCards } from '../ListOfHourCards';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

export const InfoCard = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'MMM d', { locale: enUS });

  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <Text style={[styles.headerText, styles.headerTextTitle]}>Today</Text>
        <Text style={styles.headerText}>{formattedDate}</Text>
      </View>
      <ListOfHourCards />
    </View>
  );
};
