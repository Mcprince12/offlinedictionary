import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import AppHeader from './components/AppHeader'


export default function App() {
  return (
    <View style={styles.container}>
      <AppHeader/>
      <HomeScreen/>
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
