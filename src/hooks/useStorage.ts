import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStorage = () => {
  const getItem = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (e) {
      console.error('Error getting item:', e);
      return null;
    }
  };

  const setItem = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Error saving item:', e);
    }
  };

  return {getItem, setItem};
};
