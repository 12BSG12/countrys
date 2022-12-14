import { Search } from '../Search/Search';
import { CustomSelect } from '../Custom/CustomSelect';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setRegion } from '../../redux/reducers/app';
import { Wrapper } from './styles';

export const Controls = () => {
  const options = [
    { value: 'africa', label: 'Africa' },
    { value: 'americas', label: 'Americas' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'oceania', label: 'Oceania' },
  ];
  const dispatch = useAppDispatch()
  const { region, searchText } = useAppSelector(state => state.app)
  
  return (
    <Wrapper>
      <Search />
      <CustomSelect
        isDisabled={ searchText ? true : false }
        isSearchable={false}
        options={options}
        placeholder="Filter by Region..."
        isClearable
        defaultValue={region}
        onChange={(e: any) => dispatch(setRegion(e?.value))}
      />
    </Wrapper>
  );
};
