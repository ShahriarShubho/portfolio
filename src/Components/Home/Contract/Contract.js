import React from 'react';
import { useForm } from "react-hook-form";

const Contract = () => {
  const contractData = [
    {
      icon: "A",
      title : "Email",
      text : "shubha.shahriar@gmail.com" 
    },
    {
      icon: "B",
      title : "Phone",
      text : "+8801817510325" 
    },
    {
      icon: "A",
      title : "Linkedin",
      text : "https://www.linkedin.com/in/shahriar-hoq-shubho-a869121b3/" 
    }
  ]
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    return (
        <div id="contract" className="container">
            <h1 className="text-center my-5">Contract Me</h1>
            <div className="row">
              {contractData.map(contract => 
              <div className="col-md-4 text-center">
                <div className=" bordered p-3 shadow-lg">
                <h5>{contract.title}</h5>
                <p>{contract.text}</p>
              </div>
              </div>)}
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mt-3">
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
      <input className="btn btn-primary w-25 bt-2 mb-5" type="submit" />
    </form>
        </div>
    );
};

export default Contract;