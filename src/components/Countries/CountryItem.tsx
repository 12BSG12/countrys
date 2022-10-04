import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ICountry } from '../../model/countriesAPIType';
import { Cart, CartImg, CartInfo } from './styles';

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
