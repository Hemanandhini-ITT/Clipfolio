import React from 'react';
import {ScrollView, Text, Image, View} from 'react-native';
import PhotoGallery from '../components/photoGallery';
import styles from '../styles/profileScreen';

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/women/32.jpg'}}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Stella</Text>
      </View>
      <PhotoGallery />
    </ScrollView>
  );
};

export default ProfileScreen;
