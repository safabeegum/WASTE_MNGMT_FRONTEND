import logo from './logo.svg';
import './App.css';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserHome from './components/UserHome';
import HomePage from './components/HomePage';
import AdminSignIn from './components/AdminSignIn';

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/adminsignin' element={<AdminSignIn/>}/>
      <Route path='/usersignin' element={<UserSignIn/>}/>
      <Route path='/usersignup' element={<UserSignUp/>}/>
      <Route path='/userhome' element={<UserHome/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
