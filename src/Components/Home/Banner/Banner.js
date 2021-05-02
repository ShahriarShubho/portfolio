import React from 'react';
import bannerImg from '../../../images/bg-remove.png'

const Banner = () => {
    return (
        <section className=" row">
            <div className="col-md-6 offset-1">
                <h1 className="mt-5 pt-5">Hello <br/> This is Shahriar Shubho </h1>
                <h3>A full-Stack web Developer</h3>
                <a href="#contract"><button className="btn btn-info">Here me</button></a>
                <a href="https://drive.google.com/uc?export=download&id=1W_haJK7OoFOh8YpHc6SB_NjV5VAvt_m7"><button className="btn btn-info mx-3">Download CV</button></a>
            </div>
            <div className="col-md-5">
                <img className="img-fluid h-100" src={bannerImg} alt=""/>
            </div>
        </section>
    );
};

export default Banner;