import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchImageLibrary} from 'react-native-image-picker';
import styles from './Profile.styles';

const ProfileScreen = () => {
  const [name, setName] = useState('Stella');
  const [image, setImage] = useState(
    'https://randomuser.me/api/portraits/women/32.jpg',
  );
  const [editMode, setEditMode] = useState(false);
  const [tempName, setTempName] = useState('');
  const [tempImage, setTempImage] = useState('');

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const storedName = await AsyncStorage.getItem('profile_name');
    const storedImage = await AsyncStorage.getItem('profile_image');
    if (storedName) {
      setName(storedName);
    }
    if (storedImage) {
      setImage(storedImage);
    }
  };

  const handleEdit = () => {
    setTempName(name);
    setTempImage(image);
    setEditMode(true);
  };

  const handleImagePick = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.assets && response.assets.length > 0) {
        setTempImage(response.assets[0].uri ?? '');
      }
    });
  };

  const handleSubmit = async () => {
    await AsyncStorage.setItem('profile_name', tempName);
    await AsyncStorage.setItem('profile_image', tempImage);
    setName(tempName);
    setImage(tempImage);
    setEditMode(false);
  };

  return (
    <View style={styles.container}>
      {!editMode ? (
        <>
          <Image source={{uri: image}} style={styles.profileImage} />
          <Text style={styles.profileName}>{name}</Text>
          <Button title="Edit Profile" onPress={handleEdit} />
        </>
      ) : (
        <View style={styles.form}>
          <Text style={styles.headerTitle}>Edit Profile</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter Name"
            value={tempName}
            onChangeText={setTempName}
          />
          <TouchableOpacity
            onPress={handleImagePick}
            style={styles.imagePicker}>
            <Text style={styles.imagePickerText}>Pick Profile Image</Text>
          </TouchableOpacity>
          {tempImage !== '' && (
            <Image source={{uri: tempImage}} style={styles.previewImage} />
          )}
          <Button title="Save" onPress={handleSubmit} />
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;
