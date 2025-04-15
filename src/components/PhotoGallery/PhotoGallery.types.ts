export interface Photo {
  id: number;
  src: {
    medium: string;
  };
}

export interface PexelsResponse {
  photos: Photo[];
}
