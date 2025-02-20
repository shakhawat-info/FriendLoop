import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './features/currentuser/currentuserSlice';
import darktheme  from './features/dark-light theme/themeSlice';
import menushort from './features/menuShort/menushortSlice';
import otherUser from './features/otherUser/OtherUserSlice';
import alluser from './features/alluser/alluserSlice';
import notify from './features/notify/notifySlice';




export const store = configureStore({
  reducer: {
    user: userSlice,
    theme: darktheme,
    menushort: menushort,
    otherUser: otherUser,
    alluser: alluser,
    notify: notify,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
})