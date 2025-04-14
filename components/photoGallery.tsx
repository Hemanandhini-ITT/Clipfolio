import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/photoGallery';
import {fetchPexelsPhotos} from '../api/photoGallery';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

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
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {photos.map((url, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedPhoto(url)}>
            <Image
              source={{uri: url}}
              style={styles.image}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal visible={!!selectedPhoto} transparent={true} animationType="fade">
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={() => setSelectedPhoto(null)}>
          <Image
            source={{uri: selectedPhoto ?? ''}}
            style={styles.fullscreenImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default PhotoGallery;
