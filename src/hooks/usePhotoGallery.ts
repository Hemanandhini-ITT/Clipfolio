import {useCallback, useEffect, useState} from 'react';
import { fetchPexelsPhotos } from '../services/photoGalleryApi';

export const usePhotoGallery = () => {
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

  return {
    photos,
    loading,
    refreshing,
    selectedPhoto,
    setSelectedPhoto,
    handleRefresh,
  };
};
