import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: 0,
}

export const alluserSlice = createSlice({
  name: 'alluser',
  initialState,
  reducers: {
    alluser: (state) => {
        state.value++
    },
  },
})

// Action creators are generated for each case reducer function
export const { alluser } = alluserSlice.actions

export default alluserSlice.reducer