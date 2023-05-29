import './Header.css';
import { useState , useEffect } from 'react'


function Header() {

    const  [ HeaderContent , setHeaderContent ] = useState();

    useEffect(()=>{
      
     
            setHeaderContent(
                
                                  
                                       <div class="top-bar">
                                       <div class="container-fluid">
                                           <div class="row">
                                               <div class="col-lg-3">
                                                   <div class="logo">
                                                       <a href="index.html">
                                                           <h1><span style={{"color":"black"}}>Task</span></h1>
                                         
                                                       </a>
                                                   </div>
                                               </div>
                             
                                           </div>
                                       </div>
                                   </div>
                            
            )
          
       
    });
  return (
   
<div>


{HeaderContent}
</div>
  );
}

export default Header;
