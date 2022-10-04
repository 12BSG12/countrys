import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ICountry } from '../../model/countriesAPIType';

const Cart = styled.div`
  width: 100%;
  height: 310px;
  background-color: var(--colors-ui-base);
  border-radius: var(--radii);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;
const CartImg = styled.div`
  img {
    display: block;
    width: 100%;
    height: 150px;
    object-fit: cover;
    object-position: center;
    border-radius: var(--radii) var(--radii) 0 0;
  }
`;
const CartInfo = styled.div`
  padding: 1rem 1.5rem 2rem;
  h2 {
    font-size: var(--fs-md);
    font-weight: var(--fw-bold);
    margin-bottom: 20px;
  }
  div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: var(--fs-sm);
    line-height: 1.5;
    font-weight: var(--fw-light);
    &:last-child {
      margin-bottom: 0;
    }
  }
  span {
    font-weight: var(--fw-bold);
    padding-right: 1rem;
  }
`;

export const CountryItem: FC<ICountry> = ({ flags, name, population, region, capital }) => {
  return (
    <Link to={'country_info/' + name}>
      <Cart>
        <CartImg>
          <img src={flags.png} alt="" />
        </CartImg>
        <CartInfo>
          <h2>{name}</h2>
          {population !== 0 && (
            <div>
              <span>Population:</span>
              <p>{population}</p>
            </div>
          )}
          <div>
            <span>Region:</span>
            <p>{region}</p>
          </div>
          {capital && (
            <div>
              <span>Capital:</span>
              <p>{capital}</p>
            </div>
          )}
        </CartInfo>
      </Cart>
    </Link>
  );
};
