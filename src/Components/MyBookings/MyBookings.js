import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './MyBookings.css'
const MyBookings = () => {
   const {user} = useAuth()
 
   const [myTourPlan, setMyTourPlan] = useState([])
   
   useEffect(() =>{
       fetch('http://localhost:5000/myTours')
       .then(res => res.json())
       .then(data => console.log(data))
   },[])
   
    useEffect(()=>{
        fetch(`http://localhost:5000/myTours/${ user.email}`)
        .then(res => res.json())
        .then(data => setMyTourPlan(data))
    },[user.email])

    const handleDelete = id =>{
        const url = `http://localhost:5000/myTours/${id}`;
        fetch(url,{
            method:'DELETE'
        })  
        .then(res => res.json())
        .then(data =>{
           
            if(data.deletedCount ){
                
                alert('Your Plan is Canceled')
                const remaining = myTourPlan.filter(tourPlan => tourPlan._id !== id);
            setMyTourPlan(remaining);
            }
            
        })

    }

    return (
        <div>
            <h1 className="text-center m-4" style={{color:"salmon"}}>My Bookings</h1>
            <div className="tours-card container ">
                {
                    myTourPlan.map(tourPlan => <div 
                        key={tourPlan.key} 
                    >                        
                            
                            <Card style={{ width:"30rem" }} className="m-3">
                            <Card.Img className="img-style"  style={{height:"233.33px"}} variant="top" src={tourPlan.image} />
                            <Card.Body>
                            <Card.Text className="mb-2">
                                <span className="fw-bold fs-5">{tourPlan.cost}</span>/<span className="me-5" style={{color:"gray"}}>Per Person</span> <span style={{color:"gray"}} className="ms-5 ps-4">{tourPlan.duration}</span>
                                </Card.Text>
                                <Card.Title className="fs-4 mb-4">{tourPlan.name}</Card.Title>
                                
                                <button className="button text-decoration-none " onClick={() => handleDelete(tourPlan._id)} >Cancel Booking</button>
                            </Card.Body>
                            </Card>
                            
                        

                    </div>)
                }
            </div>
        </div>
    );
};

export default MyBookings;