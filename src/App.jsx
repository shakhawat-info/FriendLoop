import { useState } from 'react';
import { BrowserRouter , Routes , Route} from 'react-router';
import { useSelector } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material';

// components
import Layout from './components/Layout/Layout';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Profile from './pages/Profile';


function App() {
  const data = useSelector((state)=> state.user.value);
  const isdark = useSelector((state)=>state.theme.value)
  
  
  const themeSet = createTheme({
    palette: {
      mode: isdark ? 'light':'dark',
    },
  });
  return (
    <ThemeProvider theme={themeSet}>

    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        {data ? 
        <Route path='' element={<Layout/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Route>
        :
        <Route path='/' element={<Signin/>}></Route>
        }
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
