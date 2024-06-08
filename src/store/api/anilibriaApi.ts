import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  transformParamsToTitleUrl,
  transformParamsToListOfTitlesUrl,
  transformParamsToSearchTitleUrl,
} from '@utils/transformers';
import {
  TitleParams,
  SearchParams,
  TitleResponse,
  ListOfTitlesParams,
} from '@utils/types';

export const anilibriaApi = createApi({
  reducerPath: 'anilibriaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_ANILIBRIA_API_URL,
  }),
  endpoints: (builder) => ({
    getTitle: builder.query<TitleResponse, TitleParams>({
      query: (params) => transformParamsToTitleUrl(params),
    }),
    getRandomTitle: builder.query<TitleResponse, void>({
      query: () => 'title/random',
    }),
    getListOfTitles: builder.query<TitleResponse[], ListOfTitlesParams>({
      query: (params) => transformParamsToListOfTitlesUrl(params),
    }),
    searchTitles: builder.query<TitleResponse[], SearchParams>({
      query: (params) => transformParamsToSearchTitleUrl(params),
    }),
  }),
});

export const {
  useGetTitleQuery,
  useGetRandomTitleQuery,
  useGetListOfTitlesQuery,
  useLazySearchTitlesQuery,
} = anilibriaApi;
