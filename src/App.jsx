import { useState } from 'react';
import { BrowserRouter , Routes , Route} from 'react-router';

// components
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import MenuSide from './components/MenuSide'
import DarkLight from './components/DarkLight';
import { useSelector } from 'react-redux';

function App() {
  const data = useSelector((state)=> state.user.value)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        {data ? 
        <Route>
          <Route path='/' element={<MenuSide/>}></Route>
          <Route path='/DarkLight' element={<DarkLight/>}></Route>
        </Route>
        :
        <Route path='/' element={<Signin/>}></Route>
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App
