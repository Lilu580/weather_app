import { View, ScrollView, FlatList } from 'react-native';
import { styles } from './styles';
import { InfoHourCard } from '../infoHourCard';

export const ListOfHourCards = () => {
  const hours = [];

  for (let i = 0; i < 24; i++) {
    hours.push(i);
  }

  return (
    <FlatList
      data={hours}
      keyExtractor={(item) => item.toString()}
      horizontal={true}
      renderItem={({ item }) => <InfoHourCard hour={item} />}
      contentContainerStyle={styles.container}
    />
  );
};
