import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/Header';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <LinearGradient colors={['#08244F', '#134CB5', '#0B42AB']} style={styles.container}>
        <Header />
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 70,
    paddingHorizontal: 30.
  },
});
