import './Manageusers.css';
import { useState  , useEffect} from 'react';
import axios from 'axios';
import { _apiurluser } from '../apiURLS';
import { Link ,useNavigate  } from 'react-router-dom';


function Manageusers() {

    const [ userDetails , setUserDetails ] = useState([]);
    const navigate = useNavigate();  


    useEffect(()=>{

        axios.get(_apiurluser+"fetch?role=user").then((response)=>{ 
            setUserDetails( response.data)
               
           })
    });

    const manageuserstatus=(_id,s)=>{
        if(s=="block")
        {

            let updateDetails={"condition_obj":{"_id":_id},"set_condition":{"status":0}};
            axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
                navigate("/manageusers");
            }).catch((err)=>{
                console.log(err);
            });            
        }   
        else if(s=="verify")
        {
            
            let updateDetails={"condition_obj":{"_id":_id},"set_condition":{"status":1}};
            axios.patch(_apiurluser+"update",updateDetails).then((response)=>{
                navigate("/manageusers");
            }).catch((err)=>{
                console.log(err);
            });            
        }
        else
        {
            let deleteDetails={"data":{"_id":_id}};
            axios.delete(_apiurluser+"delete",deleteDetails).then((response)=>{
               navigate("/manageusers");
            }).catch((err)=>{
                console.log(err);
            });            
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
                                <h2> View & Manage <span style={{"color":"#659DBD"}}>User Details</span> </h2>
                              <br />
                               <table class="table table-bordered"> 
                                <tr style={{"color":"#116466"}}> 
                                    <th>RegId</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>Gender</th>
                                    <th>Info</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                              
                               {
                                userDetails.map((row)=>(
                                    <tr style={{"color":"#29648A"}}>
                                    <td>{row._id}</td>
                                    <td>{row.name}</td>
                                    <td>{row.email}</td>
                                    <td>{row.mobile}</td>
                                    <td>{row.address}</td>
                                    <td>{row.city}</td>
                                    <td>{row.gender}</td>
                                    <td>{row.info}</td>
                                    <td>
                                        {
                                           row.status == 0 && <a style={{"color":"green"}}  onClick={()=>{ manageuserstatus(row._id,"verify") }} >Verify User</a>
                                        }
                                        
                                        {
                                            row.status == 1 && <a style={{"color":"orange"}}  onClick={()=>{ manageuserstatus(row._id,"block") }} >Block User</a>
                                        }
                                        
                                    </td>
                                    <td><a style={{"color":"red"}} onClick={()=>{ manageuserstatus(row._id,"delete") }} >Delete</a></td>
                                    </tr>
                                   
                                ))
                               }

                                </table>


                            </div>
                            <div class="about-text">
                             
                                <a class="btn" href="">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}
   
    </div>
  );
} 

export default Manageusers;
