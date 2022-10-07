import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home/Home.jsx"
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/navBar/NavBar';
import ActualFinance from './components/OperationForm/ActualFinance';
import AddOperation from './components/OpsForm/AddOperation';
import UpdateOps from './components/OpsForm/UpdateOps';
import Profile from './components/Profile/Profile';
import UserLogin from './components/userLogin/UserLogin';
import UserRegister from './components/userLogin/UserRegister';

function App() {
  return (
    <div className="App">
      {/* <div></div> */}
        <NavBar/>
      <Routes>
        {/* <Route path='/' element={<NavBar/>}/> */}
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path='/registeruser' element={<UserRegister/>}/>
        <Route exact path="/login" element={<UserLogin/>}/> 
        <Route exact path="/register" element={<ActualFinance/>}/>
        <Route exact path="/addops" element={<AddOperation/>}/>
        <Route path="/updateops/:id" element={<UpdateOps/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
