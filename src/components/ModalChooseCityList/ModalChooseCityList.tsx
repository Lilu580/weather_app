import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';
import { ModalChooseCityItem } from '../ModalChooseCityItem';

export const ModalChooseCityList = () => {
  return ( 
    <View style={styles.container}>
      <ModalChooseCityItem/>
      <ModalChooseCityItem/>
      <ModalChooseCityItem/>
    </View>
  );
};