import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './features/currentuser/currentuserSlice';
import darktheme  from './features/dark-light theme/themeSlice';
import menushort from './features/menuShort/menushortSlice';
import otherUser from './features/otherUser/OtherUserSlice';




export const store = configureStore({
  reducer: {
    user: userSlice,
    theme: darktheme,
    menushort: menushort,
    otherUser: otherUser,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
})