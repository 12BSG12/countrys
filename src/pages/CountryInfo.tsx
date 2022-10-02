import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useGetCountryInfoQuery } from '../redux';
import styled from 'styled-components';
import { Container } from '../components/Container';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IMG = styled.img.attrs(props => ({
  src: props.src || ''
}))`
  width: 50%
`;
const Info = styled.div`
  width: 50%
`;
const BackBtn = styled.button`
`;
const Title = styled.h1``;
const Body = styled.div`
  display: flex;
`;
const Text = styled.div``;

const BorderCountries = styled.div`
`

const BorderBtn = styled.button`
`

export const CountryInfo = () => {
  const params = useParams<{ name: string }>();
  const { data } = useGetCountryInfoQuery(params.name?.toLowerCase());
  const navigate = useNavigate()
  const handelOnClick = (value: string) => {
    navigate(`/country_info/${value.toLowerCase()}`)
  }
  return (
    <Container>
      <Link to="/">
        <BackBtn>Back</BackBtn>
      </Link>
      <Wrapper>
        <IMG src={data?.flags.png}/>
        <Info>
          <Title>{data?.name}</Title>
          <Body>
            <Text>
              <p>Native name: {data?.nativeName}</p>
              <p>Population: {data?.population}</p>
              <p>Region: {data?.region}</p>
              <p>Sub Region: {data?.subregion}</p>
              <p>Capital: {data?.capital}</p>
            </Text>
            <Text>
              <p>Top Level Domain: {data?.topLevelDomain}</p>
              <p>Currencies: {data?.currencies?.map((item) => `${item.name},`)}</p>
              <p>Languages: {data?.languages?.map((item) => `${item.name},`)}</p>
            </Text>
          </Body>
          <BorderCountries>Border Countries: {data?.languages?.map((item, index) => <BorderBtn key={index} onClick={() => handelOnClick(item.name)}>{item.name}</BorderBtn>)}</BorderCountries>
        </Info>
      </Wrapper>
    </Container>
  );
};
