import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Header } from './components/Header';
import { useFonts } from 'expo-font';
import { WeatherIcon } from './components/WeatherIcon';
import { ShowInfo } from './components/showInfo';
import { ShortInfo } from './components/ShortInfo';
import { InfoCard } from './components/InfoCard';
import { WeekForecast } from './components/WeekForecast';
import { ModalChooseCity } from './components/ModalChoseCity';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { setOpen } from './features/cities';
import { getWeather } from './api';
import { useEffect } from 'react';
import { setWeather } from './features/weather';
import * as weatherActions from './features/weather'

export default function MainPage() {
  const { SelectedCity } = useAppSelector(state => state.cities)
  const dispatch = useAppDispatch();

  useEffect(() => {
    // const getWeatherFromServer = async () => {
    //   const weatherFromServer = await getWeather(SelectedCity)
    //   dispatch(setWeather(weatherFromServer));
    // };

    // getWeatherFromServer();

    dispatch(weatherActions.init(SelectedCity));
  }, [SelectedCity]);


  return (
    <ScrollView>
          <StatusBar style="auto" />
          <LinearGradient
            colors={['#08244F', '#134CB5', '#0B42AB']}
            style={styles.container}
          > 
            <ModalChooseCity />
            <Header />
            <WeatherIcon />
            <ShowInfo />
            <ShortInfo />
            <InfoCard />
            <WeekForecast/>
          </LinearGradient>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
});