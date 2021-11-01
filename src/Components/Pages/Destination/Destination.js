import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image1 from '../../../images/image1.jpg'
import image2 from '../../../images/image2.jpg'
import image3 from '../../../images/image3.jpg'
import image4 from '../../../images/image4.jpg'
import image5 from '../../../images/image5.jpg'
import image6 from '../../../images/image6.jpg'
import image7 from '../../../images/image7.jpg'
// import image from '../../../images/image1.jpg'
const Destination = () => {
    return (
        <div id='photos'>
           <h1 className="text-center mb-3 mt-4 " style={{color:"#34568b"}}>Travel Gallery</h1>
            <div>
               <Container>
                   <Row>
                       <Col sm={12} md={6} lg={3}>
                           <img  src={image1} className="img-fluid pt-3" alt=""  style={{width:"100%",height:"250px"}}/>
                       </Col>
                       <Col sm={12} md={6} lg={3}>
                           <img src={image2} className="img-fluid pt-3" alt="" style={{width:"100%",height:"250px"}}/>
                       </Col>
                       <Col sm={12} md={6} lg={3}>
                           <img src={image3} className="img-fluid pt-3" alt="" style={{width:"100%",height:"250px"}}/>
                       </Col>
                       <Col sm={12} md={6} lg={3}>
                           <img src={image4} className="img-fluid pt-3" alt=""style={{width:"100%",height:"250px"}} />
                       </Col>
                       <Col md={12} lg={4}>
                           <img src={image5} className="img-fluid pt-3" alt="" />
                       </Col>
                       <Col  md={12} lg={8} >
                           <img src={image6} className="img-fluid pt-3" style={{height:"636px"}} alt="" />
                       </Col>
                       <Col  sm={12} md={12}>
                           <img src={image7} className="img-fluid pt-3 pb-5" alt="" />
                       </Col>
                       {/* <Col sm={12} md={3}>
                           <img src="" className="img-fluid" alt="" />
                       </Col> */}
                       
                   </Row>
               </Container>
            </div>
        </div>
    );
};

export default Destination;