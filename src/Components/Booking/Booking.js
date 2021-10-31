/* import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import './Booking.css'
const Booking = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        
        
        fetch('http://localhost:5000/tours/', {
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            if(result.insertedId){
               alert('Added a New Tour Plan')
                
                reset();
            }
        })
    };
    return (
        <div>
            <h1 className="text-center mt-5" style={{color:"salmon"}}>Compleate Your Booking</h1>

            <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>

            <input defaultValue={user.displayName} {...register("name")} />

            <input defaultValue={user.email} {...register("email", { required: true })} />
            {errors.email && <span className="error">This field is required</span>}
            <input placeholder="Address" defaultValue="" {...register("address")} />
            <input placeholder="City" defaultValue="" {...register("city")} />
            <input placeholder="phone number" defaultValue="" {...register("phone")} />

            <button className="border-0 py-3 my-3 text-white fw-bold rounded-3" style={{backgroundColor:"salmon"}} type="submit">Complete Your Bookings</button> 
            </form>
            
        </div>
    );
};

export default Booking; */