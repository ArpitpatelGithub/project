import './GetData.css';
import { useState , useEffect } from 'react'; 
import axios from 'axios';
import { _apiurluser } from '../apiURLS';
import { Link , useNavigate } from 'react-router-dom';

function GetData() {

  const [userDetails , setUserDetails] = useState([]); 
  const navigate = useNavigate();  

  useEffect(()=>{
    axios.get(_apiurluser+"fetch?role=user").then((response)=>{
        setUserDetails(response.data); 
    })
  });      

    
  return (
    <div>
    {/* About Start */}
    <div class="container-fluid py-6 px-5">
        <div class="row g-5">
            <div class="col-lg-12">
<h1 class="display-5 text-uppercase mb-4">
View <span class="text-primary">User Details</span>
</h1>
<table class="table-bordered" cellspacing="5" cellpadding="5">
<tr>
<th>RegID</th>
<th>Name</th>    
<th>Email</th>
<th>Mobile</th>
<th>Address</th>
<th>City</th>
<th>Gender</th>

</tr>    

{
 userDetails.map((row)=>(
    <tr>    
    <td>{row._id}</td>
    <td>{row.name}</td>   
    <td>{row.email}</td>
    <td>{row.mobile}</td>
    <td>{row.address}</td>
    <td>{row.city}</td>
    <td>{row.gender}</td>
 

    </tr>
 ))    
}

</table>
            </div>
        </div>
    </div>
    {/* About End */}    
    </div>  );
}

export default GetData;
