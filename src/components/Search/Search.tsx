import { ChangeEvent, useCallback, useState } from 'react';
import styled from 'styled-components';
import { IoSearch } from "react-icons/io5";
import { debounce } from 'lodash';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setSearchText } from '../../redux/reducers/app';

const InputContainer = styled.label`
  display: flex;
  align-items: centre;
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;
  
  @media(min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...'
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  background-color: var(--colors-ui-base);
  color: var(--colors-text);
`;

export const Search = () => {
  const dispatch = useAppDispatch()
  const { searchText } = useAppSelector(state => state.app)
  const [value, setValue] = useState(searchText);

  const handleOnChangeSearch  = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    updateSearchValue(e.target.value)
  }

  const updateSearchValue = useCallback(
    debounce((value: string) => {
      dispatch(setSearchText(value));
    }, 1000),
    [dispatch],
  );
  return (
    <InputContainer>
      <IoSearch />
      <Input
        value={value}
        onChange={handleOnChangeSearch}
      />
    </InputContainer>
  );
};
