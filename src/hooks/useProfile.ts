import { useState, useEffect, useRef } from 'react';
import { useStorage } from './useStorage';
import { useImagePicker } from './useImagePicker';

export const useProfile = () => {
  const { getItem, setItem } = useStorage();
  const [name, setName] = useState('Stella');
  const [editMode, setEditMode] = useState(false);
  const tempNameRef = useRef('');
  const [tempName, setTempName] = useState(tempNameRef.current);
  const { imageUri: tempImage, pickImage: handleImagePick, setImageUri: setTempImage } = useImagePicker();
  const [image, setImage] = useState('https://randomuser.me/api/portraits/women/32.jpg');

  useEffect(() => {
    loadProfile();
  });

  useEffect(() => {
    tempNameRef.current = tempName;
  }, [tempName]);

  const loadProfile = async () => {
    const storedName = await getItem('profile_name');
    const storedImage = await getItem('profile_image');
    if (storedName) {setName(storedName);}
    if (storedImage) {setImage(storedImage);}
  };

  const handleEdit = () => {
    tempNameRef.current = name;
    setTempName(tempNameRef.current);
    setTempImage(image);
    setEditMode(true);
  };

  const handleSubmit = async () => {
    const newName = tempNameRef.current;
    await setItem('profile_name', newName);
    await setItem('profile_image', tempImage);
    setName(newName);
    setImage(tempImage);
    setEditMode(false);
  };

  return {
    name,
    image,
    editMode,
    tempName,
    setTempName,
    tempNameRef,
    tempImage,
    handleEdit,
    handleImagePick,
    handleSubmit,
  };
};
