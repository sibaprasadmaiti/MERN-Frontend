import logo from './logo.svg';
import './App.css';


import NavBar from './components/navBar';
import AddUser from './components/addUser';
import AllUser from './components/allUser';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<AllUser />} />
        <Route path='/add' element={<AddUser />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
