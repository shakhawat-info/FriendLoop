import { useState } from 'react';
import { BrowserRouter , Routes , Route} from 'react-router';

// components
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
