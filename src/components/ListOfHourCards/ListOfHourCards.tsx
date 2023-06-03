import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import { InfoCard } from '../InfoCard';
import { InfoHourCard } from '../infoHourCard';

export const ListOfHourCards = () => {
  const hours = [];

  for (let i = 0; i < 24; i++) {
    hours.push(i);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {hours.map((hour) => (
          <InfoHourCard hour={hour} key={hour}/>
        ))}
      </View>
    </ScrollView>
  );
};
