import { useState, useCallback } from 'react';
import { Search } from '../Search/Search';
import styled from 'styled-components';
import { CustomSelect } from '../Custom/CustomSelect';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setSearchText, setRegion } from '../../redux/reducers/sort';
import { debounce } from 'lodash'
import { ActionMeta, OnChangeValue } from 'react-select';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 80px;

  @media(min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  } 
`;

export const Controls = () => {
  const options = [
    { value: 'africa', label: 'Africa' },
    { value: 'america', label: 'America' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'oceania', label: 'Oceania' },
  ];
  const dispatch = useAppDispatch()
  const { searchText, region } = useAppSelector(state => state.sort)
  const [value, setValue] = useState(searchText);

  const handleOnChangeSearch  = (value: string) => {
    setValue(value)
    updateSearchValue(value)
  }

  const updateSearchValue = useCallback(
    debounce((value: string) => {
      dispatch(setSearchText(value));
    }, 1000),
    [dispatch],
  );
   
  console.log(region);

  return (
    <Wrapper>
      <Search search={value} setSearch={handleOnChangeSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region..."
        isClearable
        defaultValue={region}
        onChange={(e: any) => dispatch(setRegion(e.value))}
      />
    </Wrapper>
  );
};
