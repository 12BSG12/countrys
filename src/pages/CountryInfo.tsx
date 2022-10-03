import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetBordersCountryQuery, useGetCountryInfoQuery } from '../redux';
import styled from 'styled-components';
import { Container } from '../components/Container';
import { IoArrowBack } from 'react-icons/io5';

const Wrapper = styled.div`
  position: relative;
  padding-top: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    position: absolute;
    top: 50px;
    left: 0;
  }
`;

const IMG = styled.img.attrs((props) => ({
  src: props.src || '',
}))`
  width: 50%;
  margin-right: 80px;
`;
const Info = styled.div`
  width: 50%;
`;
const BackBtn = styled.button`
  width: 110px;
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 5px;
  }
  background-color: var(--colors-ui-base);
  color: var(--colors-text);
  border-radius: var(--radii);
`;
const Title = styled.h1`
  font-size: 25px;
  font-weight: var(--fw-bold);
  margin-bottom: 20px;
`;

const Body = styled.div`
  display: flex;
  margin-bottom: 50px;
`;
const Text = styled.div`
  font-size: var(--fs-sm);
  p {
    margin-bottom: 10px;
  }
  span {
    font-weight: var(--fw-bold);
  }
`;

const BorderCountries = styled.div`
  font-size: var(--fs-sm);
  span {
    font-weight: var(--fw-bold);
  }
`;

const BorderBtn = styled.button`
  width: 110px;
  padding: 8px 0;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: var(--colors-ui-base);
  color: var(--colors-text);
  border-radius: var(--radii);
`;

export const CountryInfo = () => {
  const params = useParams<{ name: string }>();
  const { data, isLoading, isFetching } = useGetCountryInfoQuery(params.name?.toLowerCase());
  const alphaCode = data?.borders?.join(',');
  const { data: borders } = useGetBordersCountryQuery(alphaCode, { skip: alphaCode === undefined });
  const navigate = useNavigate();
  const handelOnClick = (value: string) => {
    navigate(`/country_info/${value.toLowerCase()}`);
  };
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <BackBtn>
            <IoArrowBack size="20px" />
            Back
          </BackBtn>
        </Link>
        {isLoading || isFetching ? (
          <div>Loading...</div>
        ) : (
          <>
            <IMG src={data?.flags.png} />
            <Info>
              <Title>{data?.name}</Title>
              <Body>
                <Text>
                  <p>
                    <span>Native name:</span> {data?.nativeName}
                  </p>
                  {data?.population && (
                    <p>
                      <span>Population:</span> {data?.population}
                    </p>
                  )}
                  <p>
                    <span>Region:</span> {data?.region}
                  </p>
                  <p>
                    <span>Sub Region:</span> {data?.subregion}
                  </p>
                  {data?.capital && (
                    <p>
                      <span>Capital:</span> {data?.capital}
                    </p>
                  )}
                </Text>
                <Text>
                  <p>
                    <span>Top Level Domain:</span> {data?.topLevelDomain}
                  </p>
                  <p>
                    <span>Currencies:</span>{' '}
                    {data?.currencies?.map((item) => `${item.name}`).join(',')}
                  </p>
                  <p>
                    <span>Languages:</span>{' '}
                    {data?.languages?.map((item) => `${item.name}`).join(',')}
                  </p>
                </Text>
              </Body>
              {alphaCode && (
                <BorderCountries>
                  <span>Border Countries: </span>
                  {borders?.map((item, index) => (
                    <BorderBtn key={index} onClick={() => handelOnClick(item.name)}>
                      {item.name}
                    </BorderBtn>
                  ))}
                </BorderCountries>
              )}
            </Info>
          </>
        )}
      </Wrapper>
    </Container>
  );
};
