import { View, TouchableWithoutFeedback, TextInput, Modal } from 'react-native';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { styles } from './styles';
import { ModalChooseCityList } from '../ModalChooseCityList';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setOpen } from '../../features/cities';
import { useState } from 'react';
import * as citiesActions from '../../features/cities';

export const ModalChooseCity: React.FC = () => {
  const { isOpenModal } = useAppSelector((state) => state.cities);
  const [query, setQuery] = useState('');

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(citiesActions.initCities(query));
  }, [query]);

  const handleCloseModals = useCallback(() => {
    dispatch(setOpen(false));
  }, [])

  const ClearQuery = useCallback(() => {
    setQuery('');
  }, []) 

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
