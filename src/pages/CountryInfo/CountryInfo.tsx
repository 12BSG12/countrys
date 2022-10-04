import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetBordersCountryQuery, useGetCountryInfoQuery } from '../../redux';
import { Container } from '../../components/Container';
import { IoArrowBack } from 'react-icons/io5';
import {
  Wrapper,
  BackBtn,
  IMG,
  Info,
  Title,
  Body,
  BorderCountries,
  BorderBtn,
  Text,
} from './styles';
import ThreeDots from '../../common/Preloader';
import { Skeleton } from './Skeleton';

export const CountryInfo = () => {
  const params = useParams<{ name: string }>();
  const { data, isLoading, isFetching } = useGetCountryInfoQuery(params.name?.toLowerCase());
  const alphaCode = data?.borders?.join(',');
  const {
    data: borders,
    isLoading: isLding,
    isFetching: isFehing,
  } = useGetBordersCountryQuery(alphaCode, { skip: alphaCode === undefined });
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
          <ThreeDots />
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
                  {isLding || isFehing
                    ? [...Array(data?.borders?.length)].map((_, index) => <Skeleton key={index} />)
                    : borders?.map((item, index) => (
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

export default CountryInfo;
