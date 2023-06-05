import { View, TouchableWithoutFeedback, TextInput, Modal } from 'react-native';
import { useEffect } from 'react';
import { styles } from './styles';
import { ModalChooseCityList } from '../ModalChooseCityList';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setCity, setOpen } from '../../features/cities';
import { useState } from 'react';
import * as citiesActions from '../../features/cities';
import { ModalChooseCityFromServerList } from '../ModalChooseCityFromServerList';

export const ModalChooseCity: React.FC = () => {
  const {
    isOpenModal,
    citiesFromServer,
    isLoadingCitiesFromServer,
    isErrorCitiesFromServer,
  } = useAppSelector((state) => state.cities);
  const [query, setQuery] = useState('');

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(citiesActions.initCities(query));
  }, [query]);

  const handleCloseModals = () => {
    dispatch(setOpen(false));
  };

  const ClearQuery = () => {
    setQuery('');
  };

  return (
    <Modal visible={isOpenModal} transparent animationType="slide">
      <TouchableWithoutFeedback onPress={handleCloseModals}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.container}>
              <TextInput
                value={query}
                onChangeText={setQuery}
                style={styles.input}
                placeholder="choose city..."
                keyboardType="default"
              />
              <ModalChooseCityList query={query} ClearQuery={ClearQuery} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
