import React from 'react';
import Profile from '../../components/Profile';
import PhotoGallery from '../../components/PhotoGallery';
import VideoGallery from '../../components/VideoGallery';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const ProfileScreen = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Photos" component={PhotoGallery} />
        <Tab.Screen name="Videos" component={VideoGallery} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default ProfileScreen;
