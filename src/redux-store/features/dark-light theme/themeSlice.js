import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem("DarkLightTheme") ? localStorage.getItem("DarkLightTheme") : false,
}

export const themeSlice = createSlice({
  name: 'darkLight',
  initialState,
  reducers: {
    darktheme: (state ) => {
        state.value = !state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { darktheme } = themeSlice.actions

export default themeSlice.reducer