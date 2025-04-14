import React from 'react';
import {SafeAreaView} from 'react-native';
import ProfileScreen from './screens/profileScreen';
import styles from './styles/app';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileScreen />
    </SafeAreaView>
  );
}
