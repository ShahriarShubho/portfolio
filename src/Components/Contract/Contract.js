import React from 'react';
import { useForm } from "react-hook-form";

const Contract = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    return (
        <div className="container">
            <h3>Contract Me</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
        <div className="col-md-6">
        <input className="w-100 bg-dark p-2 text-white rounded" id="inputID" placeholder="Your Name" {...register("name", { required: true })} /><br/>
      {errors.name && <span className="text-danger">Name field is required</span>}
        </div>
        <div className="col-md-6">
      <input className="w-100 bg-dark p-2 text-white rounded" id="inputID" placeholder="Your Email" {...register("email", { required: true })} /><br/>
      {errors.email && <span className="text-danger">Email field is required</span>}
      </div>
      </div>
        <textArea placeholder="Your Massage" id="inputID" className="w-100 bg-dark p-3 mt-3 text-white rounded" {...register("message", { required: true })}></textArea><br/>
        {errors.message && <span className="text-danger">Please Tell me something</span>} <br/>
      <input className="btn btn-primary w-25 mt-2" type="submit" />
    </form>
        </div>
    );
};

export default Contract;