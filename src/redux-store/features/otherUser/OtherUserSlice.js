import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: localStorage.getItem('profileID') ? localStorage.getItem('profileID') : null,
}

export const otherUserSlice = createSlice({
  name: 'otherUser',
  initialState,
  reducers: {
    otherUser: (state , actions) => {
        state.value = actions.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { otherUser } = otherUserSlice.actions

export default otherUserSlice.reducer