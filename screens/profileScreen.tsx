import React, {useState} from 'react';
import {ScrollView, Text, Image, View, TouchableOpacity} from 'react-native';
import PhotoGallery from '../components/photoGallery';
import VideoGallery from '../components/videoGallery';
import styles from '../styles/profileScreen';

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState<'photo' | 'video'>('photo');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/women/32.jpg'}}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Stella</Text>
      </View>

      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'photo' && styles.activeTab]}
          onPress={() => setActiveTab('photo')}>
          <Text style={styles.tabText}>Photos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'video' && styles.activeTab]}
          onPress={() => setActiveTab('video')}>
          <Text style={styles.tabText}>Videos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabContent}>
        {activeTab === 'photo' ? <PhotoGallery /> : <VideoGallery />}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
