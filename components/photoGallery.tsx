import React, {useEffect, useState} from 'react';
import {Image, ScrollView, ActivityIndicator} from 'react-native';
import styles from '../styles/photoGallery';
import {fetchPexelsPhotos} from '../api/photoGallery';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPexelsPhotos()
      .then(setPhotos)
      .catch(error => {
        console.error('Error fetching photos from Pexels:', error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {photos.map((url, index) => (
        <Image
          key={index}
          source={{uri: url}}
          style={styles.image}
          resizeMode="cover"
        />
      ))}
    </ScrollView>
  );
};

export default PhotoGallery;
