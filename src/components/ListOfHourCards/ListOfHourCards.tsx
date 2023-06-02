import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';
import { InfoCard } from '../InfoCard';
import { InfoHourCard } from '../infoHourCard';

export const ListOfHourCards = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <InfoHourCard isActive={false} />
        <InfoHourCard isActive={true} />
        <InfoHourCard isActive={false} />
        <InfoHourCard isActive={false} />
        <InfoHourCard isActive={false} />
        <InfoHourCard isActive={false} />
      </View>
    </ScrollView>
  );
};
