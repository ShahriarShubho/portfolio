import React from 'react';
import {
    FaCode,
    FaMobileAlt,
    FaCircleNotch,
  } from "react-icons/fa";
import ServiceDetails from './ServiceDetails/ServiceDetails';

const Services = () => {
    const serviceData = [
        {
          id: 1,
          icon: <FaCode className="commonIcons" />,
          heading: "Web Development",
          description : "A MERN Stack web application I provide. every kind of website I can create"
        },
        {
          id: 4,
          icon: <FaMobileAlt className="commonIcons" />,
          heading: "Responsive Development",
          description: "Responsive web development is most import cause user visit site PC,Mobile or Tab"

        },
        {
          id: 3,
          icon: <FaCircleNotch className="commonIcons" />,
          heading: "Web Design",
          description : "Web Design is the main part for an website, It's satisfy user experience and attract user."


        },
      ]
    return (
      <section id="services" className="bg-color py-5">
        <div className="container">
            <h1 className="text-center pb-5">My Services</h1>
            <div className="row">
                {
                    serviceData.map(service => <ServiceDetails services={service}></ServiceDetails>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;