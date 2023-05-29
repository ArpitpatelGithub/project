import './Footer.css';
import { useState , useEffect  } from 'react';
import { Link } from 'react-router-dom';

function Footer() {

    const  [FooterContent , setFooterContent ] = useState();

    useEffect(()=>{
 
       
     
            setFooterContent(<div>
                 <div class="container copyright" >
                    <div class="row"  style={{"backgroundColor":"#697184","color":"white" ,"position":"sticky"}} >
                        <div class="col-md-6">
                            <p>&copy; <a href="https://htmlcodex.com/law-firm-website-template" style={{"color":"black"}}>Designed By </a>, Arpit Patel</p>
                        </div>
                        <div class="col-md-6">
                            
                        </div>
                    </div>
                </div>
            </div>);
        
      
        
    
    } );


  return (
   
    <div> 
       { FooterContent }
           
      </div> 

  );
}

export default Footer;
