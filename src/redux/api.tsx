import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from './store';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
    prepareHeaders: (headers, {getState}) => {
      const token = getState() as RootState;
      if (token) {
        headers.set(
          'authorization',
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGJiMzg5ODNlMDRmYmMxZjZlNmUyZTU0ZTlmMDVmZCIsInN1YiI6IjY1ZjJjMDA0MDZmOTg0MDE2MjQ0NzI3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cfZEf-POnV9X4biX7Eo-xKQ8up580miSBAp6hhjt6gE',
        );
      }

      return headers;
    },
  }),
  endpoints: builder => ({
    getMovies: builder.query<MovieList, void>({
      query: () =>
        'discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
    }),
    getMovieById: builder.query<Movie, number>({
      query: itemId =>
        `movie/${itemId}?api_key=5dbb38983e04fbc1f6e6e2e54e9f05fd`,
    }),
  }),
});

export const {useGetMoviesQuery} = movieApi;
export const {useGetMovieByIdQuery} = movieApi;

export type Movie = {
  id: number;
  original_title: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  runtime: string;
  tagline: string;
  vote_average: number;
};

export type MovieList = {
  results: Movie[];
};
