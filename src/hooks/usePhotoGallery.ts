import {useCallback, useEffect, useState} from 'react';
import { fetchPexelsPhotos } from '../services/photoGalleryApi';

export const usePhotoGallery = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadPhotos = useCallback(async (pageToLoad = 1, refresh = false) => {
    try {
      const newPhotos = await fetchPexelsPhotos(pageToLoad);
      if (refresh) {
        setPhotos(newPhotos);
      } else {
        setPhotos(prev => [...prev, ...newPhotos]);
      }
      setHasMore(newPhotos.length > 0);
    } catch (error) {
      console.error('Error fetching photos from Pexels:', error);
    }
  }, []);

  useEffect(() => {
    loadPhotos(page).finally(() => setLoading(false));
  }, [page, loadPhotos]);

  const handleRefresh = async () => {
    setRefreshing(true);
    setPage(1);
    await loadPhotos(1, true);
    setRefreshing(false);
  };

  const loadMorePhotos = async () => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    const nextPage = page + 1;
    await loadPhotos(nextPage);
    setPage(nextPage);
    setLoadingMore(false);
  };

  return {
    photos,
    loading,
    refreshing,
    selectedPhoto,
    setSelectedPhoto,
    handleRefresh,
    loadMorePhotos,
    loadingMore,
  };
};
