
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleTour.css'

const SingleTour = ({tour}) => {
    const { _id,name, image, cost, duration,about} = tour;
    return (
        <div className=" container mb-4">
             <Card style={{ width: '25rem' }} className="shadow">
                <Card.Img className="img-style"  style={{height:"233.33px"}} variant="top" src={image} />
                <Card.Body>
                <Card.Text className="mb-2">
                      <span className="fw-bold fs-5">{cost}</span>/<span className="me-5" style={{color:"gray"}}>Per Person</span> <span style={{color:"gray"}} className="ms-5 ps-4">{duration}</span>
                    </Card.Text>
                    <Card.Title className="fs-4 mb-4">{name}</Card.Title>
                    
                    <Link className=" card-button text-decoration-none text-white rounded" to={`/tourdetails/${_id}`} >Book Now</Link>
                </Card.Body>
            </Card>                     
        </div>
    );
};

export default SingleTour;