import { FC } from 'react';
import styled from 'styled-components';
import { ICountry } from '../../model/countriesAPIType';

const Cart = styled.div`
  width: 100%;
  background-color: var(--colors-ui-base);
  border-radius: var(--radii);
`;
const CartImg = styled.div`
  img{
    width: 100%;
    height: 150px;
    border-radius: var(--radii) var(--radii) 0 0;
  }
`;
const CartInfo = styled.div`
  padding: 2rem;
  div{
    display: flex;
    align-items: center;
  }
  span{
    padding-right: 1rem;
  }
`;

export const CountryItem: FC<ICountry> = ({ flags, name, population, region, capital }) => {
  return (
    <Cart>
      <CartImg>
        <img src={flags.png} alt="" />
      </CartImg>
      <CartInfo>
        <h2>{name}</h2>
        <div>
          <span>Population:</span>
          <p>{population}</p>
        </div>
        <div>
          <span>Region:</span>
          <p>{region}</p>
        </div>
        <div>
          <span>Capital:</span>
          <p>{capital}</p>
        </div>
      </CartInfo>
    </Cart>
  );
};
