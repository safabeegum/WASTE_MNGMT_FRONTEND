import logo from './logo.svg';
import './App.css';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserHome from './components/UserHome';
import HomePage from './components/HomePage';
import AdminSignIn from './components/AdminSignIn';
import CollectSignIn from './components/CollectSignIn';
import AdminHome from './components/AdminHome';
import CollectHome from './components/CollectHome';
import AddCollector from './components/AddCollector';
import ViewCollector from './components/ViewCollector';
import UserFeedback from './components/UserFeedback';

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/adminsignin' element={<AdminSignIn/>}/>
      <Route path='/adminhome' element={<AdminHome/>}/>
      <Route path='/addcollector' element={<AddCollector/>}/>
      <Route path='/viewcollector' element={<ViewCollector/>}/>
      <Route path='/collectsignin' element={<CollectSignIn/>}/>
      <Route path='/collecthome' element={<CollectHome/>}/>
      <Route path='/usersignin' element={<UserSignIn/>}/>
      <Route path='/usersignup' element={<UserSignUp/>}/>
      <Route path='/userhome' element={<UserHome/>}/>
      <Route path='/userfeedback' element={<UserFeedback/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
