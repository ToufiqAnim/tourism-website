import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsFillTelephoneFill, } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import { GiEarthAmerica} from "react-icons/gi";
import { FaBus, FaHotel, FaPassport } from "react-icons/fa";
const About = () => {
    return (
        <div >
            <h1 className="text-center m-4 fw-bold" style={{color:"#34568b"}}>About Us</h1>
            <hr />
            <Container className='p-5 mb-5' style={{color:"gray"}}>
                <Row>
                    <Col sm={12} md={6} lg={3}>

                        <GiEarthAmerica className="mb-3 ms-5" style={{fontSize:"60px",color:"#34568b"}}/>
                        <h4>Diverse Destinations</h4>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <FaBus className="mb-3 ms-5" style={{fontSize:"60px",color:"#34568b"}}/>
                        <h4>Private Transport</h4>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                    <FaHotel className="mb-3 ms-5" style={{fontSize:"60px",color:"#34568b"}} />
                    <h4 >Great Hotels</h4>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <FaPassport className="mb-3 ms-5" style={{fontSize:"60px", color:"#34568b"}}/>
                        <h4 >Fast Booking</h4>
                        
                    </Col>
                </Row>
            </Container>
            
            <div style={{backgroundColor:"#eee "}}>
            <h3 className='text-center p-3 fw-bold' style={{color:"#34568b"}}>contact us</h3> <hr/>
            <Container className='p-5 mb-5' style={{color:"gray"}}>
                <Row>
                    <Col sm={12} md={6} lg={3}>
                        <h3 className=" fw-600" style={{color:"#34568b"}}> Dhaka</h3>
                        <ul className="list-unstyled">
                            <li> <BsFillTelephoneFill/> 01812300000</li>
                            <li><FiMail/> tour@plus.com</li>
                            <li> <GoLocation/>  Main Street 006</li>
                        </ul>
                        
                        
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                    <h3 className=" fw-600" style={{color:"#34568b"}}>New York</h3>
                        <ul className="list-unstyled">
                        <li> <BsFillTelephoneFill/> 2300-252012</li>
                        <li> <FiMail/> tour@plus.com</li>
                        <li> <GoLocation/> Main Street 007</li>
                        </ul>

                        
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h3 className=" fw-600" style={{color:"#34568b"}}>Sydney</h3>
                        <ul className="list-unstyled">
                        <li> <BsFillTelephoneFill/> 0795-2300123</li>
                        <li><FiMail/> tour@plus.com</li>
                        <li> <GoLocation/> Main Street 008</li>
                        </ul>

                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h3 className=" fw-600" style={{color:"#34568b"}}>Japan</h3>
                        <ul className="list-unstyled">
                        <li> <BsFillTelephoneFill/> 811-23001234</li>
                        <li> <FiMail/> tour@plus.com</li>
                        <li>  <GoLocation/> Main Street 009</li>
                        </ul>
                        
                        
                    </Col>
                </Row>
            </Container>
            </div>
            <div>


            </div>
        </div>
    );
};

export default About;