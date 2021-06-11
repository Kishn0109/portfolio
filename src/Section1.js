import { Button } from 'react-bootstrap'
import React from 'react'
import './Section1.css'
import img from './images/photo.png'
function Section1({first,second}) {
    return (
        <div>

        <div className="Heros-section container-fluid p-5 d-flex justify-content-center overflow-hidden">
           <div className="effect-wrap">
               <div className="effect effect-1">

               </div>
               <div className="effect effect-2">

               </div>
               <div className="effect effect-3">
                    <div></div> <div></div> <div></div><div></div>
                    <div></div> <div></div> <div></div><div></div>
                    <div></div> <div></div> <div></div><div></div>
                    <div></div> <div></div> <div></div><div></div>
                    <div></div> <div></div> <div></div><div></div>
                    <div></div> <div></div> <div></div><div></div>
                    <div></div> <div></div> <div></div><div></div>
                    <div></div> <div></div> 
                    <div></div> <div></div> 
                    <div></div> <div></div> <div></div>
                    
               </div>
              
               <div className="effect effect-5">

               </div>
               <div className="effect-6 main_effect_6">

               </div>
               <div className="effect-6 main_effect_6b">

               </div>

           </div>
            <div className="container_div container row">
            
                <div className="side_first col-md-7 col-sm-12 text-md-left d-flex  align-content-center">
                    <div className="MY-slfe d-flex flex-column">

                    <span>Hellow</span>
                    <h1> I Am Kishan </h1>
                    <span>Web Designer & Developer</span>
                <Button>Know More</Button>
                    </div>
                </div>
                <div className="side_second  order-2 col-md-5 col-sm-12 d-flex justify-content-center align-content-center">
                    <div className="img_div bg-warning">

                            <img src={img} alt="img" width="300px" height="300px" />
                    </div>
                    <div className="design_1">
                        
                    </div>
                </div>

                

            </div>
            
        </div>
        </div>

    )
}

export default Section1
