import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { countriesAPIType } from '../../model/countriesAPIType';
import lodash from 'lodash';
import { sortType } from '../../model/sortType';
export const countriesAPI = createApi({
  reducerPath: 'pizzaAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://restcountries.com/v2/',
  }),
  endpoints: (builder) => ({
    getCountries: builder.query<countriesAPIType[], sortType>({
      query: ({ searchText, region }) => ({
        url: `${searchText ? searchText : region ? region : 'all'}`,
      }),
      transformResponse: (response: countriesAPIType[]) =>
        response.map((item) => ({
          flags: item.flags,
          name: item.name,
          population: item.population,
          region: item.region,
          capital: item.capital,
        })),
    }),
  }),
});

export const { useGetCountriesQuery } = countriesAPI;
