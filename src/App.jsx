import { useState } from 'react';
import { BrowserRouter , Routes , Route} from 'react-router';

// components
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import MenuSide from './components/MenuSide'
import { useSelector } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material';


function App() {
  const data = useSelector((state)=> state.user.value);
  const isdark = useSelector((state)=>state.theme.value)
  
  
  const darkTheme = createTheme({
    palette: {
      mode: isdark ? 'light':'dark',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>

    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        {data ? 
        <Route>
          <Route path='/' element={<MenuSide/>}></Route>
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
