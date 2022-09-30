import { CountryItem } from './CountryItem';
import { useGetCountriesQuery } from '../../redux';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(1, 1fr);
  gap: 80px;
`;

export const Countries = () => {
  const { data = [] } = useGetCountriesQuery('');
  console.log(data);

  return (
    <Grid>
      {data.map((item, index) => (
        <CountryItem key={index} {...item} />
      ))}
    </Grid>
  );
};
