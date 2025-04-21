import React from 'react';
import {Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../../components/Profile';
import PhotoGallery from '../../components/PhotoGallery';
import VideoGallery from '../../components/VideoGallery';
import PersonalInfo from '../../components/PersonalInfo';
import ReactHookForm from '../../components/ReactHookForm';
import {useLogout} from '../../hooks/useLogout';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const {handleLogout} = useLogout();

  return (
    <Tab.Navigator
      screenOptions={{
        headerRight: () => (
          <Button title="Logout" onPress={handleLogout} color="#d11a2a" />
        ),
      }}>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Photos" component={PhotoGallery} />
      <Tab.Screen name="Videos" component={VideoGallery} />
      <Tab.Screen name="Personal Form" component={PersonalInfo} />
      <Tab.Screen name="Hook Form" component={ReactHookForm} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
