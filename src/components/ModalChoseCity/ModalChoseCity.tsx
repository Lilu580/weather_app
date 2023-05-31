import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';

export const ModalChooseCity = () => {
  return ( 
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="choose city..."
        keyboardType="default"
      />
    </View>
  );
};