export type countriesAPIType = {
  name: string;
  topLevelDomain?: string[];
  alpha2Code?: string;
  alpha3Code?: string;
  callingCodes?: string[];
  capital: string;
  altSpellings?: string[];
  subregion?: string;
  region: string;
  population: number;
  latlng?: number[];
  demonym?: string;
  area?: number;
  timezones?: string[];
  borders?: string[];
  nativeName?: string;
  numericCode?: string;
  flags: {
    svg: string;
    png: string;
  };
  currencies?: currenciesType[];
  languages?: languagesType[];
  translations?: {
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    hu: string;
  };
  flag?: string;
  regionalBlocs?: regionalBlocsType[];
  cioc?: string;
  independent?: boolean;
};

type regionalBlocsType = {
  acronym: string;
  name: string;
};

type languagesType = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

type currenciesType = {
  code: string;
  name: string;
  symbol: string;
};

export interface ICountry {
  flags: {
    svg: string;
    png: string;
  };
  name: string;
  population: number;
  region: string;
  capital: string;
}