import React from 'react';
import bannerImg from '../../../images/bg-remove.png'

const Banner = () => {
    return (
        <section className=" row container-fluid">
            <div className="col-md-6 offset-1">
                <h1>Hello <br/> This is Shahriar Shubho </h1>
                <h3>A full-Stack web Developer</h3>
                <button className="btn btn-info">Here me</button>
                <button className="btn btn-info mx-5">Download CV</button>
            </div>
            <div className="col-md-5">
                <img className="img-fluid" src={bannerImg} alt=""/>
            </div>
        </section>
    );
};

export default Banner;