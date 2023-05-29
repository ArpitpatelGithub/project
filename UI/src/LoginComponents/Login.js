import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { _apiurluser } from '../apiURLS';
import { Link, useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate();
    
    const [ output , setOutput ] = useState();
    const [ email , setEmail ] = useState(null);
    const [ password , setPassword ] = useState(null);
    
    const handleSubmit=()=>{
        var userDetails={"email":email, "password":password}
  
        if(email=="")
        {
          setOutput("email is requried");
        }
        else if(password=="")
        {
          setOutput("Password is requried");
        }

        else
        
        {
          
        axios.post(_apiurluser+"login",userDetails).then((response)=>{ 
         if(response.data.token!="error")
         {
           let user = response.data.userDetails;
          localStorage.setItem("token",response.data.token);
          localStorage.setItem("_id",user._id);
          localStorage.setItem("name",user.name);
          localStorage.setItem("email",user.email);
          localStorage.setItem("mobile",user.mobile);
          localStorage.setItem("address",user.address);
          localStorage.setItem("city",user.city);
          localStorage.setItem("gender",user.gender);
          localStorage.setItem("role",user.role);
          localStorage.setItem("info",user.info);


           user.role=="admin"?navigate("/admin")
           :navigate("/user");
         }
         else 
         {
          setOutput("Invalid User or varify your account")
          
          setEmail("");
          setPassword("");
         }
         
        })
         
      }
    }

  return (
   
    <div> 
  {/* <!-- About Start --> */}
            <div class="about">
                <div class="container">
                    <div class="row align-items-center">
                        
                        <div class="col-lg-12 col-md-12">
                            <div class="section-header">
                                <h2> Login <span style={{"color":"#659DBD"}}>Here !!!</span></h2>
                            </div>
                         
<font  style={{"color":"red"}}>{output}</font>
<form>
 
    <div class="form-group">
      <label for="email">Email address:</label>
      <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
    </div>
    
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} />
    </div>

    
    <button type="button" onClick={handleSubmit} class="btn btn-success">login</button>
</form>
                        </div>
                    </div>
                </div>
            </div>
            
    </div>
  );
}

export default Login;
