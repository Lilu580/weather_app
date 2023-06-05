import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { removeCity, setSelectedCity } from '../../features/cities';
import { useCallback } from 'react';
import { setCity } from '../../features/cities';
import { SelectedCity } from '../../types/SelectedCity';

type Props = {
  SelectedCity: SelectedCity;
  ClearQuery: () => void;
};

export const ModalChooseCityItem = ({ SelectedCity, ClearQuery }: Props) => {
  const dispath = useAppDispatch();

  const handleOnChooseCity = useCallback(() => {
    dispath(setSelectedCity(SelectedCity));
    ClearQuery();
    dispath(setCity(SelectedCity));
  }, []);

  const handleOnRemoveCity = useCallback(() => {
    dispath(removeCity(SelectedCity));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={handleOnChooseCity}>
          <Text style={styles.text}>{`${SelectedCity.name}(${SelectedCity.country})`}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleOnRemoveCity}>
          <Text style={styles.text}>x</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
