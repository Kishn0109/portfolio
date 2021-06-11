import { Button, CarouselItem } from 'react-bootstrap'
import React from 'react'
import './Work.css'
import chatting from './images/chatting.svg'
import videocall from './images/videocall.svg'
import myweb from './images/my_web.svg'
import Carousel from 'react-bootstrap/Carousel';
// import { Button } from 'react-bootstrap'

function Work() {
    return (
        <div>
            {/* <div className="container-fluid"> */}
                {/* <div className="container"> */}
                <div className="about_heading header">
                                <h1>My Work</h1>
                </div>
                    <Carousel outoplay={true}>
                        <Carousel.Item interval={300000} className="work_carouselitem">
                            <img src={chatting} className="about_image d-block w-100 "alt="image one" />
                            <Carousel.Caption className="work_caption">
                                <h4 className="about_caption_header">Appi Chat</h4>
                                <p>I have made a realtime chat application with the help of <b>   react.js,redux,firebase,material ui </b>.Its name is Appi-chat.In Appichat users can <b>communicate</b> with each other,User can <b>login </b>with the help of email id and password,Also seen <b>Last message </b>,timing of receiving message,sender name,recevier name and <b>creat new room's</b> </p>
                                    <button className="about_button">View Projrct</button>
                            </Carousel.Caption>
                            
                        </Carousel.Item>
                        <Carousel.Item interval={300000} className="work_carouselitem">
                            <img src={videocall} className="about_image d-block w-100 " alt="image one" />

                            <Carousel.Caption className="work_caption">
                                <h4 className="about_caption_header">Vi video</h4>
                                <p>I have made a realtime chat as well as <b>video chat</b> application with the help of <b>react.js,redux,material ui</b>.Its name is Vi video. User can make video calls also chat with friend's and user can talk on call </p>
                                <button className="about_button">view project</button>

                            </Carousel.Caption>

                        </Carousel.Item>
                        <Carousel.Item interval={300000} className="work_carouselitem">
                            <img src={myweb} className="about_image d-block w-100 " alt="image one" />

                            <Carousel.Caption className="work_caption">
                                <h4 className="about_caption_header">Single page Design</h4>
                                <p>I make my first sing page design with the help of Html Css</p>
                                <button className="about_button">view site</button>

                            </Carousel.Caption>

                        </Carousel.Item>
                    </Carousel>
                        

                {/* </div> */}
            {/* </div> */}
        </div>
    )
}

export default Work
