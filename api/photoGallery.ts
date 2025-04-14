import axios from 'axios';

const PEXELS_API_KEY = 'dCr3aCtCXyLhVjyxxHShd9VELEGSlBolXTo62KAh5Axxxxxxxxxxxxx';
const PEXELS_API_URL = 'https://api.pexels.com/v1/curated?per_page=90';

interface Photo {
    id: number;
    src: {
      medium: string;
    };
  }

interface PexelsResponse {
  photos: Photo[];
}

export const fetchPexelsPhotos = async (): Promise<string[]> => {
  const response = await axios.get<PexelsResponse>(PEXELS_API_URL, {
    headers: {
      Authorization: PEXELS_API_KEY,
    },
  });

  return response.data.photos.map((photo) => photo.src.medium);
};
