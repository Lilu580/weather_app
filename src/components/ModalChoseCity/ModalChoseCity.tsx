import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';
import { ModalChooseCityList } from '../ModalChooseCityList';

export const ModalChooseCity = () => {
  return ( 
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="choose city..."
        keyboardType="default"
      />
      <ModalChooseCityList />
    </View>
  );
};