import React from 'react';
import {
    FaGithub,
    FaCamera,
    FaCircleNotch,
    FaApple,
    FaFileVideo,
    FaSearchDollar,
  } from "react-icons/fa";
import ServiceDetails from './ServiceDetails/ServiceDetails';

const Services = () => {
    const serviceData = [
        {
          id: 1,
          icon: <FaGithub className="commonIcons" />,
          heading: "Web Development",
        },
        {
          id: 2,
          icon: <FaCamera className="commonIcons" />,
          heading: "Photography",
        },
        {
          id: 3,
          icon: <FaCircleNotch className="commonIcons" />,
          heading: "Web Desing",


        },
        {
          id: 4,
          icon: <FaApple className="commonIcons" />,
          heading: "App Devlopment",

        },
        {
          id: 5,
          icon: <FaFileVideo className="commonIcons" />,
          heading: "Video Editing",

        },
        {
          id: 6,
          icon: <FaSearchDollar className="commonIcons" />,
          heading: "SEO Expert",

        },
      ]
    return (
      <section className="bg-dark">
        <div id="services" className="container">
            <h1 className="text-center py-5">My Services</h1>
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