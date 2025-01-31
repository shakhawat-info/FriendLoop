import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './features/currentuser/currentuserSlice';
import darktheme  from './features/dark-light theme/themeSlice';
import menushort from './features/menuShort/menushortSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    theme: darktheme,
    menushort: menushort,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
})