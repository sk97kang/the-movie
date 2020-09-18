// import Movie from 'path/to/interfaces';

export type Movie = {
  id: number;
  title: string;
  rating: number;
  summary: string;
  medium_cover_image: string;
};

export type MovieDetail = {
  id: number;
  rating: number;
  large_cover_image: string;
  title_long: string;
  like_count: number;
  download_count: number;
  description_full: string;
};
