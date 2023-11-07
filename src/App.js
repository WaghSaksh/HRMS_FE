import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Login_page_Admin from './Components/Login_page_Admin';
import Login_by_Head from './Components/Login_by_Head';
import Login_by_user from './Components/Login_by_user';
import Registration_by_Admin from './Components/Registration_by_Admin.jsx '
import Registration_by_Head from './Components/Registration_by_Head'
import Registration_by_user from './Components/Registration_by_user'

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/register_by_admin' element={<Registration_by_Admin />}></Route>
    <Route path='/login_by_admin' element={<Login_page_Admin/>}></Route>
    <Route path='/login_by_head' element={<Login_by_Head/>}></Route>
    <Route path='/login_by_user' element={<Login_by_user/>}></Route>
    <Route path='/register_by_head' element={<Registration_by_Head/>}></Route>
    <Route path='/register_by_user' element={<Registration_by_user />}></Route>
   </Routes> 

       {/* <Login_page_Admin/> */}
      {/*<Registration/> */}
    </div>
  );
}

export default App;
