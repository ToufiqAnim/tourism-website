import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddTours.css';
import image from "../../images/TajMahal.png" ;

const AddTours = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://bloodcurdling-moonlight-19364.herokuapp.com/tours', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Added New Plan Successfully');
                reset();
            }
        })
    };


    return (
        <div className="add-tours">
            <img className='img-fluid mb-4' src={image} alt="" />
            <h1 className="text-center mb-5">Add Your Tour Plans</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />

            <textarea {...register("description")} placeholder="Description" />

            <input type="number" {...register("price")} placeholder="Price" />

            <input {...register("img")} placeholder="Image Url" />
            <input type="submit" />
            </form>
           
        </div>
    );
};

export default AddTours;

/* 
import React from "react";


export default function App() {
 
     <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName", { required: true, maxLength: 20 })} />
            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
            <input type="number" {...register("age", { min: 18, max: 99 })} />
            <input type="submit" />
            </form>
   
  return (
    
  );
}

*/