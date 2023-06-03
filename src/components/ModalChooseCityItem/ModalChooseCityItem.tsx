import { View, Text, TextInput, Button ,TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { removeCity, setSelectedCity } from '../../features/cities';
import { useCallback } from 'react';

type Props = {
  cityName: string;
};

export const ModalChooseCityItem = ({ cityName }: Props) => {
  const dispath = useAppDispatch();

  const handleOnChooseCity = useCallback(() => {
    dispath(setSelectedCity(cityName));
  }, []);

  const handleOnRemoveCity = useCallback(() => {
    dispath(removeCity(cityName));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={handleOnChooseCity}>
          <Text style={styles.text}>{cityName}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOnRemoveCity}>
          <Text style={styles.text}>x</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
