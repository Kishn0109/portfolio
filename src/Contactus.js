// import { Button } from '@material-ui/core'
import React from 'react'
import './Contactus.css'
// import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
// import EmailIcon from '@material-ui/icons/Email';


function Contactus() {
    return (
        <div className="main_contact ">
            <div className="container contact_container">
                <div className="contact_heading">
                    <div className="header">
                        <h1>Contact Us</h1>
                    </div>
                    <div className="about_myself">
                    </div>
                </div>
                <div className="contact_info row">
                    <div className="contact_infoinformation col-md-6 d-flex justify-content-center align-items-center">
                        <div className=" cl_left">
                            <div className="addresh d-flex">
                                <div className="d-flex align-items-center text-center justify-content-center px-2">

                                <div className="addresh_logo logo align-items-center" >
                                </div>
                                </div>
                                <div className="information text-left padd_info">
                                    <h3> <b>Location</b></h3>                             
                                    <span> <h4> C bloack Street No-11</h4> </span>
                                    <span> <h4>Bhagirathi Vihar Delhi-110094</h4></span>

                                </div>
                                </div>

                                <div className="contact_email d-flex">
                                    <div className="d-flex align-items-center justify-content-center text-center px-2">
                                    <div className="email_logo logo">
                                        {/* <EmailIcon/> */}
                                    </div>
                                    </div>
                                    
                                    <div className="email_information padd_info">
                                        <h3><b>Email </b> </h3>
                                        <span><h4>raikaran159@gmail.com</h4></span>

                                    </div>
                              </div>
                              <div className="contact_callme d-flex">
                              <div className="d-flex align-items-center justify-content-center text-center px-2">

                                  <div className="callme_logo logo"></div>
                                  </div>
                                  <div className="callme_information padd_info">
                                    <h3><b>Call me</b> </h3>
                                    <span> <h4>9354686583</h4></span> 
                                  </div>
                              </div>
                          
                        </div>
                    </div>
                    <div className=" contact_infoinputfield col-md-6 d-flex justify-content-center align-items-center">
                        <div className="input_box">
                            <form action="" className="">
                                <div className="d-flex justify-content-between"><input type="text" className="d-block input_name input_chang" placeholder="First Name"/> <input type="text" className="input_name input_chang" placeholder="Last Name" /></div>
                                <input type="email"  className="d-block input_chang" placeholder="Email"/>
                                <input type="box" className="d-block input_chang" placeholder="Type your Message" />
                                <div className="d-flex justify-content-center">
                                    {/* <Button className="bg-primary">Send Message</Button> */}
                                </div>

                            </form>
                            
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus
