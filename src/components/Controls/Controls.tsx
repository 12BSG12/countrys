import { useState } from 'react';
import { Search } from '../Search/Search';
import styled from 'styled-components';
import { CustomSelect } from '../Custom/CustomSelect';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media(min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  } 
`;

export const Controls = () => {
  const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
  ];
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('');

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region..."
        isClearable
        isSearchable={false}
        // value={select}
        // onChange={(newValue) => setSelect(newValue)}
      />
    </Wrapper>
  );
};
