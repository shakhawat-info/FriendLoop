import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './features/currentuser/currentuserSlice';
import darktheme  from './features/dark-light theme/themeSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    theme: darktheme,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
})