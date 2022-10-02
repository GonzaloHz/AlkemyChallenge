import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home/Home.jsx"
import LandingPage from './components/LandingPage/LandingPage';
import ActualFinance from './components/OperationForm/ActualFinance';
import AddOperation from './components/OpsForm/AddOperation';
import UpdateOps from './components/OpsForm/UpdateOps';
import UserLogin from './components/userLogin/UserLogin';
import UserRegister from './components/userLogin/UserRegister';

function App() {
  return (
    <div className="App">
      {/* <div></div> */}
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path='/registeruser' element={<UserRegister/>}/>
        <Route exact path="/login" element={<UserLogin/>}/> 
        <Route path="/register" element={<ActualFinance/>}/>
        <Route path="/addops" element={<AddOperation/>}/>
        <Route path="/updateops/:id" element={<UpdateOps/>}/>
      </Routes>
    </div>
  );
}

export default App;
