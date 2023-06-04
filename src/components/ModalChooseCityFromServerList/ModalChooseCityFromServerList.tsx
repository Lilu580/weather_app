import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import { ModalChooseCityItem } from '../ModalChooseCityItem';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect, useState } from 'react';

export const ModalChooseCityFromServerList = () => {
  const { citiesFromServer } = useAppSelector(state => state.cities)
  

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={citiesFromServer}
        renderItem={({ item }) => <ModalChooseCityItem cityName={item.name} request={item.url} additionalInfo={item.country} />}
      />
    </View>
  );
};
