import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
