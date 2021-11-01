import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleTour from '../SingleTour/SingleTour';
import './Tours.css'
const Tours = () => {
    const [tours, setTours] = useState([]);
    useEffect(() =>{
        fetch('https://bloodcurdling-moonlight-19364.herokuapp.com/tours')
        .then(res => res.json())
        .then(data => setTours(data))
    })
    return (
        
        <div className=" container mt-5" id='tours'>
          <h1 className="text-center mt-4">Destinations</h1>  
            <div className="tours-card">
                {
                    tours.map(tour => <SingleTour
                        key={tour.key}
                        tour={tour}
                        ></SingleTour>)
                }
            </div>
        </div>
    );
};

export default Tours;