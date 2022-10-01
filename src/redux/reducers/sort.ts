import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { sortType } from '../../model/sortType'

const initialState: sortType = {
  searchText: '',
  region: ''
}

const sortReducer = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload
    },
    setRegion(state, action: PayloadAction<string>) {
      state.region = action.payload
    },
  }
})

export const { setSearchText, setRegion } = sortReducer.actions
export default sortReducer.reducer