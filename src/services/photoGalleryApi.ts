import axios from 'axios';
import {PexelsResponse} from '../components/PhotoGallery/photoGallery.types';
import {PEXELS_API_KEY, PEXELS_API_URL} from '../utils/constants';

export const fetchPexelsPhotos = async (page: number): Promise<string[]> => {
  const response = await axios.get<PexelsResponse>(PEXELS_API_URL, {
    headers: {
      Authorization: PEXELS_API_KEY,
    },
    params: {
      per_page: 20,
      page,
    },
  });

  return response.data.photos.map(photo => photo.src.medium);
};
