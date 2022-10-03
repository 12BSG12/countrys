import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { appType } from '../../model/appType';

const initialState: appType = {
  searchText: '',
  region: '',
  theme: 'light',
};

const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
    setRegion(state, action: PayloadAction<string>) {
      state.region = action.payload;
    },
    setTheme(state, action: PayloadAction<'light' | 'dark'>) {
      state.theme = action.payload;
    },
  },
});

export const { setSearchText, setRegion, setTheme } = appReducer.actions;
export default appReducer.reducer;
