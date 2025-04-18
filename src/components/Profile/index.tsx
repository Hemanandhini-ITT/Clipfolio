import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import styles from './profile.styles';
import { useProfile } from '../../hooks/useProfile';

const ProfileScreen = () => {
  const {
    name,
    image,
    editMode,
    tempName,
    setTempName,
    tempImage,
    handleEdit,
    handleImagePick,
    handleSubmit,
  } = useProfile();

  return (
    <View style={styles.container}>
      {!editMode ? (
        <>
          <Image source={{ uri: image }} style={styles.profileImage} />
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
            style={styles.imagePicker}
          >
            <Text style={styles.imagePickerText}>Pick Profile Image</Text>
          </TouchableOpacity>
          {tempImage !== '' && (
            <Image
              source={{ uri: tempImage }}
              style={styles.previewImage}
            />
          )}
          <Button title="Save" onPress={handleSubmit} />
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;
