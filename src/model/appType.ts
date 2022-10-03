import { argTypeCountry } from "./countriesAPIType"

export type appType = {
  theme: 'light' | 'dark'
} & argTypeCountry