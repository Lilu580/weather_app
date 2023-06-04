import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import { ModalChooseCityItem } from '../ModalChooseCityItem';
import { useAppSelector } from '../../app/hooks';
import { Dispatch } from '@reduxjs/toolkit';

type Props = {
  query: string,
  ClearQuery: () => void,
}

export const ModalChooseCityList: React.FC<Props> = ({query, ClearQuery}) => {
  const { SelectedCities } = useAppSelector((state) => state.cities);
  const { citiesFromServer, isLoadingCitiesFromServer, isErrorCitiesFromServer} = useAppSelector(state => state.cities)

  const isAviableCitiesFromServer = !isLoadingCitiesFromServer && !isErrorCitiesFromServer && citiesFromServer.length !== 0 && query.length !== 0;

  return (
    <View style={styles.container}>
      {isAviableCitiesFromServer ?(
        <FlatList
        style={styles.flatList}
        data={citiesFromServer}
        renderItem={({ item }) => <ModalChooseCityItem SelectedCity={item} ClearQuery={ClearQuery}/>}
      />
      ) :(
        <FlatList
        style={styles.flatList}
        data={SelectedCities}
        renderItem={({ item }) => <ModalChooseCityItem SelectedCity={item} ClearQuery={ClearQuery}/>}
        />
      )}
    </View>
  );
};
