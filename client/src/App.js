import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home/Home.jsx"
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/navBar/NavBar';
import ActualFinance from './components/OperationForm/ActualFinance';
import AddOperation from './components/OpsForm/AddOperation';
import UpdateOps from './components/OpsForm/UpdateOps';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UnLogedRoute from './components/PrivateRoute/UnLogedRoute';
import Profile from './components/Profile/Profile';
import UserLogin from './components/userLogin/UserLogin';
import UserRegister from './components/userLogin/UserRegister';

function App() {
  
  const user = localStorage.getItem('users')

  return (
    <div className="App">
      {user && <NavBar/>}
      <Routes>
        <Route exact path='/' element={
          <UnLogedRoute>
            <LandingPage/>
          </UnLogedRoute>
      }/>
        <Route exact path="/home" element={        
          <PrivateRoute>
            <Home/>
          </PrivateRoute>
        }/>
        <Route exact path='/registeruser' element={
          <UnLogedRoute>
            <UserRegister/>
          </UnLogedRoute>
        }/>
        <Route exact path="/login" element={
          <UnLogedRoute>
            <UserLogin/>
          </UnLogedRoute>
        }/> 
        <Route exact path="/register" element={
          <UnLogedRoute>
            <ActualFinance/>
          </UnLogedRoute>
        }/>
        <Route exact path="/addops" element={
          <PrivateRoute>
            <AddOperation/>
          </PrivateRoute>
        }/>
        <Route path="/updateops/:id" element={
          <PrivateRoute>
            <UpdateOps/>
          </PrivateRoute>
        }/>
        <Route exact path="/profile" element={
          <PrivateRoute>
            <Profile/>
          </PrivateRoute>
      }/>
      </Routes>
    </div>
  );
}

export default App;
