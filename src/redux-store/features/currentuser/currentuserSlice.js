import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
}

export const currentuserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    userSlice: (state , action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { userSlice } = currentuserSlice.actions

export default currentuserSlice.reducer