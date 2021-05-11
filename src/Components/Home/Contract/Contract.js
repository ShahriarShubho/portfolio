import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AOS from "aos";
import "aos/dist/aos.css";
import swal from 'sweetalert';
import { init, sendForm } from "emailjs-com";
init("user_oDzygrpW3WjZUvySGDqhe");

const Contract = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [contactNumber, setContactNumber] = useState("000000");

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const contractData = [
    {
      icon: "A",
      title: "Email",
      text: "shubha.shahriar@gmail.com",
    },
    {
      icon: "B",
      title: "Phone",
      text: "+8801817510325",
    },
    {
      icon: "A",
      title: "Linkedin",
      text: "https://www.linkedin.com/in/shahriar-hoq-shubho",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const form = document.querySelector("#contact-form");

    generateContactNumber();
    sendForm("service_7hs4xnv", "template_7zvqa0i", "#contact-form").then(
      function (response) {
        setStatusMessage("Thank You, Message sent!");
        swal("Thank You!", "Your message sent. I check Your message as soon as possible", "success");
        console.log("SUCCESS!", response.status, response.text);
        form.reset();
      },
      function (error) {
        console.log("FAILED...", error);
        swal("Good job!", "Failed to send message! Please try again later.", "error");
      }
    );
  };

  return (
    <section id="contract" className="bg-color">
      <div data-aos="zoom-in" className="container">
        <h1 className="text-center py-5">Contract Me</h1>
        <div className="row">
          {contractData.map((contract) => (
            <div className="col-md-4 text-center">
              <div className="ml-2">
                <div className=" bordered p-3 shadow-lg">
                  <h5>{contract.title}</h5>
                  <p>{contract.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <strong className="text-center text-success">{statusMessage}</strong>
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="row mt-3">
            <div className="col-md-6">
              <input
                name="name"
                className="w-100 bg-dark p-2 text-white rounded"
                id="inputID"
                placeholder="Your Name"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-danger">Name field is required</span>
              )}
            </div>
            <div className="col-md-6">
              <input
                name="email"
                type="email"
                className="w-100 bg-dark p-2 text-white rounded"
                id="inputID"
                placeholder="Your Email"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-danger">Email field is required</span>
              )}
            </div>
          </div>
          <textArea
            name="message"
            placeholder="Your Massage"
            id="inputID"
            className="w-100 bg-dark p-3 mt-3 text-white rounded"
            {...register("message", { required: true })}
          ></textArea>
          <br />
          {errors.message && (
            <span className="text-danger">Please Tell me something</span>
          )}{" "}
          <br />
          <input type="hidden" name="contact_number" value={contactNumber} />
          <input className="btn btn-primary w-25 bt-2 mb-5" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default Contract;
