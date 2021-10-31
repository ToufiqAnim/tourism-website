import React from 'react';
import { Carousel } from 'react-bootstrap';
import tour1 from '../../../images/tour1.jpg'
import tour2 from '../../../images/tour2.jpg'
import tour3 from '../../../images/tour3.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
                
                <Carousel.Item>
                    <img
                    style={{height:"900px"}}
                    className="d-block w-100"
                    src={tour1}
                    alt="First slide"
                    />
                    <Carousel.Caption style={{ position:" absolute", top:"300px"}}>
                    <h3 style={{fontSize:"70px"}}>Are You Ready For The Journey</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{height:"900px"}}
                    className="d-block w-100"
                    src={tour2}
                    alt="Second slide"
                    />

                    <Carousel.Caption style={{ position:" absolute", top:"300px"}}>
                    <h3 style={{fontSize:"70px"}}>Go Where There Is No Path and Leave a Trail</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{height:"900px"}}
                    className="d-block w-100"
                    src={tour3}
                    alt="Third slide"
                    />

                    <Carousel.Caption style={{ position:" absolute", top:"300px"}}>
                    <h3 style={{fontSize:"70px"}}>An Exciting Journey</h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default Banner;