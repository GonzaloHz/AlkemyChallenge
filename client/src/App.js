import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home/Home.jsx"
import ActualFinance from './components/OperationForm/ActualFinance';
import AddOperation from './components/OpsForm/AddOperation';
import UpdateOps from './components/OpsForm/UpdateOps';

function App() {
  return (
    <div className="App">
      {/* <div></div> */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/register" element={<ActualFinance/>}/>
        <Route path="/addops" element={<AddOperation/>}/>
        <Route path="/updateops/:id" element={<UpdateOps/>}/>
      </Routes>
    </div>
  );
}

export default App;
