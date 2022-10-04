import { CountryItem } from './CountryItem';
import { useGetCountriesQuery } from '../../redux';
import { useAppSelector } from '../../hooks/hooks';
import { Grid } from './styles';
import { Skeleton } from './Skeleton';

export const Countries = () => {
  const { searchText, region } = useAppSelector((state) => state.app);
  const {
    data = [],
    isLoading,
    isFetching,
  } = useGetCountriesQuery({
    searchText: searchText && `name/${searchText.toLowerCase()}`,
    region: region && `region/${region}`,
  });

  return (
    <Grid>
      {isLoading || isFetching
        ? [...Array(250)].map((_, index) => <Skeleton key={index} />)
        : data.map((item, index) => <CountryItem key={index} {...item} />)}
    </Grid>
  );
};
