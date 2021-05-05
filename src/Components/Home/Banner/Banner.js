import React, { useEffect } from "react";
import bannerImg from "../../../images/bg-remove.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Typical from "react-typical";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="row">
      <div className="col-md-6 offset-1" data-aos="fade-right">
        <h1 className="mt-5 pt-5">
          Hello <br /> This is Shahriar Shubho{" "}
        </h1>
        <h3>
          I Am A 
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={
                [" Full-Stack Web Developer", 1000,
                " MERN Stack Developer", 1000,
                " JavaScrip Developer", 1000,
                " React Developer", 1000,
            ]}
          />
        </h3>
        <a href="#contract">
          <button className="btn btn-info">Hire me</button>
        </a>
        <a href="https://drive.google.com/uc?export=download&id=1cTfIG1nqH7-_jLRl1myFeh-35cIgswnI">
          <button className="btn btn-info mx-3">Download CV</button>
        </a>
      </div>
      <div className="col-md-5" data-aos="fade-left">
        <img
          className="img-fluid h-100"
          src={bannerImg}
          alt="My_Banner_Image"
        />
      </div>
    </section>
  );
};

export default Banner;
