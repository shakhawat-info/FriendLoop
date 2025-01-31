import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true,
}

export const menuSlice = createSlice({
  name: 'menushort',
  initialState,
  reducers: {
    menushort: (state ) => {
        state.value = !state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { menushort } = menuSlice.actions

export default menuSlice.reducer