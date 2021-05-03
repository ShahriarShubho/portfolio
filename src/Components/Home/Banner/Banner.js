import React, { useEffect } from 'react';
import bannerImg from '../../../images/bg-remove.png'
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
    useEffect(() => {
        AOS.init({duration : 2000});
      },[])
    return (
        <section className="row">
            <div className="col-md-6 offset-1" data-aos="fade-right">
                <h1 className="mt-5 pt-5">Hello <br/> This is Shahriar Shubho </h1>
                <h3>A full-Stack web Developer</h3>
                <a href="#contract"><button className="btn btn-info">Hire me</button></a>
                <a href="https://drive.google.com/uc?export=download&id=1W_haJK7OoFOh8YpHc6SB_NjV5VAvt_m7"><button className="btn btn-info mx-3">Download CV</button></a>
            </div>
            <div className="col-md-5" data-aos="fade-left">
                <img className="img-fluid h-100" src={bannerImg} alt="My_Banner_Image"/>
            </div>
        </section>
    );
};

export default Banner;