import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core7.p.rapidapi.com/charts',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '0841696cdbmsh51067ebd9f73473p123e65jsndd440a103c2b');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/get-top-songs-in-world' }),
  }),
});

export const {
  useGetTopChartsQuery,
} = shazamCoreApi;
