import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { countriesAPIType } from '../../model/countriesAPIType';
export const countriesAPI = createApi({
  reducerPath: 'pizzaAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://restcountries.com/v2/',
  }),
  endpoints: (builder) => ({
    getCountries: builder.query<countriesAPIType[], string>({
      query: () => ({
        url: `all`,
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
