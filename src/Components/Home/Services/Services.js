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
          description : "A full-stack web application I provide. every kind of website I can create"
        },
        {
          id: 2,
          icon: <FaCamera className="commonIcons" />,
          heading: "Photography",
          description : "Photography is the adventuring part in my skill, I do it for hobby"
        },
        {
          id: 3,
          icon: <FaCircleNotch className="commonIcons" />,
          heading: "Web Design",
          description : "Web Design is the main part for an website, It's satisfy user experience"


        },
        {
          id: 4,
          icon: <FaApple className="commonIcons" />,
          heading: "Responsive Development",
          description: "Responsive web development is most import cause user visit site PC,Mobile or Tab"

        },
        {
          id: 5,
          icon: <FaFileVideo className="commonIcons" />,
          heading: "Video Editing",
          description : "Now a days video programming is the most common function"

        },
        {
          id: 6,
          icon: <FaSearchDollar className="commonIcons" />,
          heading: "SEO Expert",
          description : "A web how to know people its emblements seo"

        },
      ]
    return (
      <section id="services" className="bg-color pt-5">
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