import React from 'react'
import './Footer.css'
import img2 from './images/undraw_Social_notifications_re_xcbi.svg'
// import EmailIcon from '@material-ui/icons/Email'
function Footer() {
    return (
        <div className="main_foot">
            
            <div className="container main_footer d-flex justify-content-between flex-column align-items-center" >
                <div className="footer_top text-center">
                <h4>Living.learning & leveling up </h4>
                <h4>one day at a time</h4>
                </div>
                <div className="footer_center d-flex justify-content-between align-items-center flex-grow-1">
                <div className="foot_left text-center">
                      
                      <h3>Kishan</h3>
                      <h4>Full Stack Developer</h4>
                  </div>
                  <div className="foot_center">
                      <h3>Portfolio</h3>
                  </div>
                  <div className="foot_right d-flex justify-content-between">
                      <div className="logo footer_logo">
                           {/* <EmailIcon/>  */}
                        </div>
                      <div className="logo footer_logo"></div>
                      <div className="logo footer_logo"></div>    
                  </div>
                </div>
                <div className="footer_bottom text-center">
                    Handcrafted by me kishan
                </div>  
                
                
            </div>
        </div>
    )
}

export default Footer
