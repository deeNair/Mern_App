import {useState} from 'react';

import { Routes, Route } from 'react-router-dom';

import NewOrderPage from './pages/NewOrderPage';
import AuthPage from './pages/AuthPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import NavBar from './components/NavBar';

import { getUser } from './utilities/users-service';

import './App.css';
import Interviewprep from './components/Interviewprep';
import JobHistory from './components/JobHistory';
import AddJobs from './components/AddJobs';
import EditJob from './components/EditJob';
import Stats from './components/Stats';

function App() {
  const [user, setUser] = useState(getUser());
  const data = [
    { value: 40 },
    { value: 25 },
    { value: 15 },
    { value: 8 },
    { value: 2 }
  ];

  return (
    <main className="App">
     { user ? 
      <>
       <div class="dash">
    <h1><span>Welcome to DashBoard</span></h1>
    </div>
    <div id="navd">
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/orders/new' element={ <NewOrderPage /> }/>
        <Route path='/orders' element={ <OrderHistoryPage /> }/>
        <Route path='/' element={<Interviewprep/>}></Route>
       <Route path='/all' element={<JobHistory/>}></Route>
       <Route path='/add' element={<AddJobs/>}></Route>
       <Route path='/stats' element={<Stats data={data}/>}></Route>
       <Route path='/edit/:id' element={<EditJob/>}></Route>
      </Routes>
      </div>
      </>
     : 
      <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
