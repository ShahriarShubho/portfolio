import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


const ServiceDetails = ({services}) => {
    useEffect(() => {
        AOS.init({duration : 2000});
      },[])
    const {icon, heading, description} = services
    return (
        <div data-aos="zoom-out" className="col-md-4">
            <div className="bordered shadow-lg p-3 mb-3 serviceCard">
            <div>
                <div>
                    <h2>{icon}</h2>
                </div>
                <div>
                    <h5>{heading}</h5>
                    <p>{description}</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ServiceDetails;