import { useState } from 'react';
import { Alert } from 'react-native';
import { signIn } from '../services/firebaseAuth';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../screens/homeScreen.types';

export const useLogin = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signIn(email, password);
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Login Error', (error as Error).message);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
  };
};
