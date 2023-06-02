import { View, Text, TextInput, Button } from 'react-native';
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

  const handleOnRemoveCCity = useCallback(() => {
    dispath(removeCity(cityName));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Button title={cityName} onPress={handleOnChooseCity}></Button>
        <Button title="r" onPress={handleOnRemoveCCity}></Button>
      </View>
    </View>
  );
};
