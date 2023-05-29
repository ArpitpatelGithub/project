import './Nav.css';
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';

function Nav() {
    const  [NavContent , setNavContent ] = useState();

    useEffect(()=>{
      
        if(localStorage.getItem("role")=="user")
        {
            setNavContent(
                
                <div> 
             
 {/* <!-- Nav Bar Start --> */}
 <div class="nav-bar">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                    <a href="#" class="navbar-brand">MENU</a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav mr-auto">
                            <a class="nav-item nav-link active"><Link to="/user">User Home</Link></a>
                            <a  class="dropdown-item"><Link to="/Editprofile">Edit Profile</Link></a>
                            
                            {/* <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" style={{"color":"#454545"}}>Settings</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item"><Link to="/cpuser">Change Password</Link></a>
                                    
                                    <a  class="dropdown-item"><Link to="/deleteuser">Delete Account</Link></a>
                                    
                                </div>
                            </div> */}
                            

                  
                       
                        </div>
                      
                    </div>
                </nav>
            </div>
        </div>
        {/* <!-- Nav Bar End --> */}        
               </div>);
        }
        else 
        {
       
                setNavContent(   
                    
                    <div> 
                           
            <div class="nav-bar">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                        <a href="#" class="navbar-brand">MENU</a>
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div class="navbar-nav mr-auto">
                            
                           
                      
                                <a  class="nav-item nav-link"><Link to="/Register">Register</Link></a>
                                {/* <a  class="nav-item nav-link"><Link to="/Editprofile">EditProfile</Link></a> */}
                                <a  class="nav-item nav-link"><Link to="/getDetail">GetData</Link></a>
                                <a  class="nav-item nav-link"><Link to="/Login">Login</Link></a>
                            </div>
                            {/* <div class="ml-auto">
                                <a class="btn" href=""><Link to="/Login">Login</Link></a>
                            </div> */}
                        </div>
                    </nav>
                </div>
            </div>
                   
                   </div>);
            
                        }          
       
    });


  return (
   
    <div> 
      
     {NavContent}
    
    </div>
  );
}

export default Nav;
