import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import { ModalChooseCityItem } from '../ModalChooseCityItem';
import { useAppSelector } from '../../app/hooks';

export const ModalChooseCityList = () => {
  const { SelectedCities } = useAppSelector(state => state.cities);

  return ( 
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={SelectedCities}
        renderItem={({item}) => <ModalChooseCityItem cityName={item}/>}
      />
    </View>
  );
};