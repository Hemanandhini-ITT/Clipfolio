import {launchImageLibrary} from 'react-native-image-picker';
import {useState} from 'react';

export const useImagePicker = () => {
  const [imageUri, setImageUri] = useState<string>('');

  const pickImage = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri ?? '';
        setImageUri(uri);
      }
    });
  };

  return { imageUri, pickImage, setImageUri };
};
