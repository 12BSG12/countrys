import { CountryItem } from './CountryItem';
import { useGetCountriesQuery } from '../../redux';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks/hooks';
import Preloader from '../../common/Preloader'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-template-rows: repeat(1, 1fr);
  gap: 40px;
`;

export const Countries = () => {
  const { searchText, region } = useAppSelector((state) => state.app);
  const { data = [], isLoading, isFetching } = useGetCountriesQuery({
    searchText: searchText && `name/${searchText.toLowerCase()}`,
    region: region && `region/${region}`,
  });

  return (
    <>
      {isLoading || isFetching ? (
        <Preloader />
      ) : (
        <Grid>
          {data.map((item, index) => (
            <CountryItem key={index} {...item} />
          ))}
        </Grid>
      )}
    </>
  );
};
