import React from 'react'
import {Button} from  'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// node_modules\bootstrap\dist\css\bootstrap.min.css
import './Navbarstyle.css';

function Naverbar() {
    return (
        <div className="main_nav container-fluid text-center justify-content-center">
               <nav className="padding_reset d-flex container justify-content-between">
                   <div className="nav-logo">
                    logo
                   </div>
                   <div className="center_navitem text-center ">
                       <ul className="main_list list-unstyled my-1 nav-item text-decoration-none d-flex justify-content-center">
                           <li className="nav-link text-center align-content-center"> <a href="#"> Home</a></li>
                           <li className="nav-link"> <a href="#"> About</a></li>
                           <li className="nav-link"> <a href="#"> Contact</a></li>
                           <li className="nav-link"> <a href="#"> Services</a></li>
                       </ul>
                    </div>
                   
               </nav>
        
        </div>
    )
}

export default Naverbar
