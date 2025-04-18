import React from 'react';
import Profile from '../../components/Profile';
import PhotoGallery from '../../components/PhotoGallery';
import VideoGallery from '../../components/VideoGallery';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const ProfileScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Photos" component={PhotoGallery} />
      <Tab.Screen name="Videos" component={VideoGallery} />
    </Tab.Navigator>
  );
};

export default ProfileScreen;
