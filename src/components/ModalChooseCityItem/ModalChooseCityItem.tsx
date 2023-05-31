import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';

type Props = {
  cityName: string,
}

export const ModalChooseCityItem = ({ cityName }: Props) => {
  return ( 
    <View style={styles.container}>
      <Text style={styles.text}>{cityName}</Text>
    </View>
  );
};