import React from 'react';
import {
  FlatList,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './photoGallery.styles';
import { usePhotoGallery } from '../../hooks/usePhotoGallery';

const PhotoGallery = () => {
  const {
    photos,
    loading,
    refreshing,
    selectedPhoto,
    setSelectedPhoto,
    handleRefresh,
  } = usePhotoGallery();

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <>
      <FlatList
        data={photos}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => setSelectedPhoto(item)}>
            <Image
              source={{uri: item}}
              style={styles.image}
              resizeMode="cover"
            />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.container}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />

      <Modal visible={!!selectedPhoto} transparent animationType="fade">
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
