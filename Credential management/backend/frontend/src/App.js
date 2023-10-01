import Login from './components/LoginPage.js'
import {Routes, Route} from 'react-router-dom';
import Register from './components/Registration.js';
import Welcome from './components/Welcome.js';
import NormalUser from './components/NormalUser.js';
import Admin from './components/Admin.js';
import ManagementPage from './components/Management.js';
import NotWelcome from './components/NotWelcome.js';
import RegisterSuccess from './components/RegisterSuccess.js';

function App() {
  return (
    //routes for all the components in the application
    <>
      <Routes>
        <Route path='/welcome' element={<Welcome/>} />
        <Route path='/' element={<Login/>} />
        <Route path='/registration' element={<Register/>}/>
        <Route path='/registersuccess' element={<RegisterSuccess/>}/>
        <Route path='/NormalPage' element={<NormalUser/>} />
        <Route path='/ManagementPage' element={<ManagementPage/>} />
        <Route path='/AdminPage' element={<Admin/>} />
        <Route path='/notwelcome' element={<NotWelcome/>} />
      </Routes>
    </>
  );
}

export default App;
