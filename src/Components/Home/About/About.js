import React, { useEffect } from "react";
import AboutImg from "../../../images/remove-bg.png";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const contractData = [
    { id: 1, title: "Name:", text: "Shahriar Shubho" },
    { id: 2, title: "Email:", text: "shubha.shahriar@gmail.com" },
    { id: 3, title: "Phone:", text: "+8801817510325" },
    { id: 4, title: "GitHub", text: "https://github.com/ShahriarShubho" },
  ];
  return (
    <div id="about" className="bg-color">
      <h1 className="text-center py-5">About Me</h1>
      <div className="row">
        <div data-aos="fade-left" className="col-md-5">
          <img
            className="img-fluid about-img"
            src={AboutImg}
            alt="aboutImage"
          />
        </div>
        <div data-aos="fade-right" className="col-md-7">
          <div className="ml-3">
          <h2>Hi There</h2>
          <p>
            This Shahriar Shubho, You can call me Shubho, I,m a full-stack
            developer. Specially MERN Developer. What you know about me, I put
            the some answer below, You may like it.{" "}
          </p>
          </div>
          <div className="row">
            {contractData.map((data) => (
              <div className="col-md-6 col-sm-6">
                <div className="ml-3">
                  <h3>{data.title}</h3>
                  <p>{data.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
