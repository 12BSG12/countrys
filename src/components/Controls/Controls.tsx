import { Search } from '../Search/Search';
import styled from 'styled-components';
import { CustomSelect } from '../Custom/CustomSelect';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setRegion } from '../../redux/reducers/app';

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
    { value: 'americas', label: 'Americas' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'oceania', label: 'Oceania' },
  ];
  const dispatch = useAppDispatch()
  const { region } = useAppSelector(state => state.app)

  console.log(region);

  return (
    <Wrapper>
      <Search />
      <CustomSelect
        options={options}
        placeholder="Filter by Region..."
        isClearable
        defaultValue={region}
        onChange={(e: any) => dispatch(setRegion(e?.value))}
      />
    </Wrapper>
  );
};
