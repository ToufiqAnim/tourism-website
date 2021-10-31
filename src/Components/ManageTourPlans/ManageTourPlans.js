import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const ManageTourPlans = () => {
    const [tourPlans, setTourPlans] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/tours')
        .then(res => res.json())
        .then(data => setTourPlans(data))
    },[])

    const handleDelete = id =>{
        const url = `http://localhost:5000/tours/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount ){
                alert('Your Plan is Canceled')
                const remaining =tourPlans.filter(tour => tour._id !== id);
            setTourPlans(remaining);
            }
            
        })
    }
    return (
        <div className="container">
            <h1 className="text-center m-4" style={{color:"salmon"}}>Manage Your Tour Plans</h1>
            <div className="tours-card">
            {
                tourPlans.map(tour => <div key={tour._id}>
                     <Card style={{ width: '25rem' }}>
                        <Card.Img className="img-style"  style={{height:"233.33px"}} variant="top" src={tour.image} />
                        <Card.Body>
                        <Card.Text className="mb-2">
                            <span className="fw-bold fs-5">{tour.cost}</span>/<span className="me-5" style={{color:"gray"}}>Per Person</span> <span style={{color:"gray"}} className="ms-5 ps-4">{tour.duration}</span>
                            </Card.Text>
                            <Card.Title className="fs-4 mb-4">{tour.name}</Card.Title>
                            
                            <button className="button" onClick={() => handleDelete(tour._id)}>Delete</button>
                        </Card.Body>
                    </Card>
                    
                </div>)
            }
            </div>
            
        </div>
    );
};

export default ManageTourPlans;