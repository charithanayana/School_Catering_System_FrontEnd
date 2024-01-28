import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import ParentRegister from './pages/ParentRegister';
import DoctorAdmin from './pages/DoctorAdmin';
import GuardianAdmin from './pages/GuardianAdmin';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<DoctorAdmin/>}/>
          <Route path='/admin' element={<GuardianAdmin/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<ParentRegister/>}/>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
