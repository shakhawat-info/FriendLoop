import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const notifySlice = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    notify: (state , action) => {
        state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { notify } = notifySlice.actions

export default notifySlice.reducer