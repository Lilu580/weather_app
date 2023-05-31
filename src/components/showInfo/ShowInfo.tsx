import { View, Text } from 'react-native';
import { styles } from './styles';

export const ShowInfo = () => {
  return ( 
    <View style={styles.container}>
      <Text style={styles.text}>
        28º
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.textInfo}>
          Precipitations 
        </Text>
        <Text style={styles.textInfo}>
          Max.: 31º   Min.: 25º
        </Text>
      </View>
    </View>
  );
};