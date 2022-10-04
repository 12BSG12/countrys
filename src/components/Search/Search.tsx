import { ChangeEvent, useCallback, useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { debounce } from 'lodash';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setSearchText } from '../../redux/reducers/app';
import { InputContainer, Input } from './styles';

export const Search = () => {
  const dispatch = useAppDispatch()
  const { searchText, region } = useAppSelector(state => state.app)
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
        disabled={region ? true : false}
        value={value}
        onChange={handleOnChangeSearch}
      />
    </InputContainer>
  );
};
