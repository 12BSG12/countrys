import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { countriesAPIType } from '../../model/countriesAPIType';
import { sortType } from '../../model/sortType';
export const countriesAPI = createApi({
  reducerPath: 'countryAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://restcountries.com/v2/',
  }),
  endpoints: (builder) => ({
    getCountries: builder.query<countriesAPIType[], sortType>({
      query: ({ searchText, region }) => ({
        url: `${searchText ? searchText : region ? region : 'all'}`,
      }),
    }),
    getCountryInfo: builder.query<countriesAPIType, string | undefined>({
      query: (name) => ({
        url: `name/${name}`,
      }),
      transformResponse: (response: countriesAPIType[]) => response[0]
    }),
  }),
});

export const { useGetCountriesQuery, useGetCountryInfoQuery } = countriesAPI;
