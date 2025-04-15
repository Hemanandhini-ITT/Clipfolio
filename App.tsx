import React from 'react';
import {SafeAreaView} from 'react-native';
import ProfileScreen from './src/screens/HomeScreen';
import styles from './App.styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileScreen />
    </SafeAreaView>
  );
}
