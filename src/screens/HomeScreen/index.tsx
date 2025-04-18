import React from 'react';
import Profile from '../../components/Profile';
import PhotoGallery from '../../components/PhotoGallery';
import VideoGallery from '../../components/VideoGallery';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PersonalInfo from '../../components/PersonalInfo';
import ReactHookForm from '../../components/ReactHookForm';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Photos" component={PhotoGallery} />
      <Tab.Screen name="Videos" component={VideoGallery} />
      <Tab.Screen name="Personal Form" component={PersonalInfo} />
      <Tab.Screen name="Hook Form" component={ReactHookForm} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
