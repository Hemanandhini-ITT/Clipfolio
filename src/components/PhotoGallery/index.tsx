import React, {useEffect, useState, useCallback} from 'react';
import {
  Image,
  FlatList,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
} from 'react-native';
import styles from './PhotoGallery.styles';
import {fetchPexelsPhotos} from './PhotoGalleryApi';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const loadPhotos = useCallback(async () => {
    try {
      const data = await fetchPexelsPhotos();
      setPhotos(data);
    } catch (error) {
      console.error('Error fetching photos from Pexels:', error);
    }
  }, []);

  useEffect(() => {
    loadPhotos().finally(() => setLoading(false));
  }, [loadPhotos]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadPhotos();
    setRefreshing(false);
  };

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <>
      <FlatList
        data={photos}
        keyExtractor={item => item}
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
