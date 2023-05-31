import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header } from './src/components/Header';
import { useFonts } from 'expo-font';
import { WeatherIcon } from './src/components/WeatherIcon';
import { ShowInfo } from './src/components/showInfo';
import { ShortInfo } from './src/components/ShortInfo';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <LinearGradient
        colors={['#08244F', '#134CB5', '#0B42AB']}
        style={styles.container}
      >
        <Header />
        <WeatherIcon />
        <ShowInfo />
        <ShortInfo />
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 70,
    paddingHorizontal: 30,
  },
});
