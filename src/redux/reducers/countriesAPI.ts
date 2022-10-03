import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { countriesAPIType, argTypeCountry } from '../../model/countriesAPIType';

export const countriesAPI = createApi({
  reducerPath: 'countryAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://restcountries.com/v2/',
  }),
  endpoints: (builder) => ({
    getCountries: builder.query<countriesAPIType[], argTypeCountry>({
      query: ({ searchText, region }) => ({
        url: `${searchText ? searchText : region ? region : 'all'}`,
      }),
    }),
    getCountryInfo: builder.query<countriesAPIType, string | undefined>({
      query: (name) => ({
        url: `name/${name}`,
      }),
      transformResponse: (response: countriesAPIType[]) => response[0],
    }),
    getBordersCountry: builder.query<{ name: string }[], string | undefined>({
      query: (alphaCod) => ({
        url: `alpha?codes=${alphaCod}`,
      }),
      transformResponse: (response: { name: string }[]) =>
        response.map((item) => ({ name: item.name })),
    }),
  }),
});

export const { useGetCountriesQuery, useGetCountryInfoQuery, useGetBordersCountryQuery } = countriesAPI;
