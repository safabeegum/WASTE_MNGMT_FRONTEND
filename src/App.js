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
import ViewUser from './components/ViewUser';
import ViewFeedback from './components/ViewFeedback';
import AddRequest from './components/AddRequest';
import ViewRequest from './components/ViewRequest';
import AssignTask from './components/AdminDashboard';
// import ViewTask from './components/ViewTask';
import AdminDashboard from './components/AdminDashboard';
import MapComponent from './components/MapComponent';
import Notifications from './components/Notifications';
import TransactionForm from './components/TransactionForm';
import InvoiceList from './components/InvoiceList';


import ViewTasks from './components/ViewTasks';
import CollectNav from './components/CollectNav';
import AdminPaymentTable from './components/AdminPaymentTable';
import WorkerTasks from './components/WorkerTasks';
import ConfirmTask from './components/ConfirmTask';




function App() {
  return (
    <BrowserRouter>

    <Routes>
      
      <Route path='/' element={<HomePage/>}/>
      <Route path='/adminsignin' element={<AdminSignIn/>}/>
      <Route path='/adminhome' element={<AdminHome/>}/>
      <Route path='/addcollector' element={<AddCollector/>}/>
      <Route path='/viewcollector' element={<ViewCollector/>}/>
      <Route path='/viewuser' element={<ViewUser/>}/>
      <Route path='/viewfeedback' element={<ViewFeedback/>}/>
      <Route path='/collectsignin' element={<CollectSignIn/>}/>
      <Route path='/collecthome' element={<CollectHome/>}/>
      <Route path='/collecnav' element={<CollectNav/>}/>
      <Route path='/usersignin' element={<UserSignIn/>}/>
      <Route path='/usersignup' element={<UserSignUp/>}/>
      <Route path='/userhome' element={<UserHome/>}/>
      <Route path='/userfeedback' element={<UserFeedback/>}/>
      <Route path='/addrequest' element={<AddRequest/>}/>
      <Route path='/viewrequest' element={<ViewRequest/>}/>
      {/* <Route path='/requesttable' element={<RequestTable/>}/> */}
      <Route path='/assigntask' element={<AssignTask/>}/>
      <Route path='/viewtask' element={<ViewTasks/>}/>
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path='/map' element={<MapComponent />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/transactionform" element={<TransactionForm />} />
      <Route path="/invoicelist" element={<InvoiceList />} />
      <Route path="/adminpaymenttable" element={<AdminPaymentTable />} />
      <Route path="/getWorkerTasks" element={<WorkerTasks />} />
      <Route path="/confirmtasks" element={<ConfirmTask />} />
      {/* <Route path="/workerdashboard" element={<WorkerDashboard />} /> */}

      
      

    </Routes>
    </BrowserRouter>
  );
}

export default App;
