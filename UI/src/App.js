 import './App.css';

import { Routes , Route } from 'react-router-dom';
import Header from './HeaderComponent/Header';
import Nav from './NavComponent/Nav';
import Content from './ContentComponent/Content';
import Register from './RegisterComponent/Register';
import Login from './LoginComponents/Login';
import Footer from './FooterComponent/Footer';
import EditProfile from './EditProfileComponent/EditProfile';
import GetData from './GetDataComponent/GetData'
import Userhome from './UserComponent/Userhome';


function App() {
 
return (
<div>

<Header />
<Nav />
<Routes>
<Route path="/" element={<Content />}></Route>
    <Route path="/Register" element={<Register />}></Route>
    <Route path="/Login" element={<Login />}></Route>
    <Route path="/Editprofile" element={<EditProfile />}></Route>
    <Route path="/getDetail" element={<GetData />}></Route>
    <Route path="/user" element={<Userhome />}></Route>
    {/* <Route path="/User" element={<Userhome />}></Route> */}
    
</Routes> 

<Footer />
        
   </div>
  );
}

export default App;
