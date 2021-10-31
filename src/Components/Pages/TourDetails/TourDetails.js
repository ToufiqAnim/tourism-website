import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './TourDetails.css'

const TourDetails = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const {tourId} = useParams();
    const [toursDetails, setToursDetails] = useState({});

    useEffect(() =>{
        fetch(`http://localhost:5000/tours/${tourId}`)
        .then(res => res.json())
        .then(data => setToursDetails(data))
    },[])

    const onSubmit = () => {
        console.log(toursDetails)
        toursDetails.email = (user.email);
        // toursDetails.status =  "pending"

        fetch('http://localhost:5000/myTours', {
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(toursDetails)
        })
        
    };

    return (
        <div>
            <Container className="mt-5">
                <Row>
                    <Col sm={12} md={12} lg={6}>
                        <Card  className='tour-info'>
                        <Card.Img variant="top" src={toursDetails.image} />
                        <Card.Body>
                            <Card.Title> <h1 style={{color:"salmon"}}>{TourDetails.name}</h1> </Card.Title>
                            <Card.Text>
                                {toursDetails.about}
                            </Card.Text>
                            <Card.Text>
                                <h3 style={{color:"salmon"}}>{toursDetails.cost}</h3>
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        
                        <div>
                            <h1 className="text-center mt-5" style={{color:"salmon"}}>Compleate Your Booking</h1>

                            <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user.displayName} {...register("name")} />

                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            {errors.email && <span className="error">This field is required</span>}
                            <input placeholder="Address" defaultValue="" {...register("address")} />
                            <input placeholder="City" defaultValue="" {...register("city")} />
                            <input placeholder="phone number" defaultValue="" {...register("phone")} />

                            <button  className="border-0 py-3 my-3 text-white fw-bold rounded-3" style={{backgroundColor:"salmon"}} type="submit">Complete Your Bookings</button> 
                            </form>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TourDetails;
