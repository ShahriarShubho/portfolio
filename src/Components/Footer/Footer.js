import React from 'react';
import {
    FaGithub,
    FaTwitter,
    FaLinkedin
  } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-dark text-center  py-4">
            <h1 className="text-center">Shahriar Shubho</h1>
            <p className="container">Hi Thanks for visit my website. That's All of you need to know about me And You Can connect with me given the bellow social media website</p>
            <div className="my-3">
        <a href="https://github.com/ShahriarShubho" target="_blank" rel="noreferrer"><FaGithub className="footerIcon" /></a>
        <a href="https://www.linkedin.com/in/shahriar-hoq-shubho-a869121b3/" target="_blank" rel="noreferrer"><FaLinkedin className="footerIcon text-primary" /></a>
        <a href="https://twitter.com/HoqShubho" target="_blank" rel="noreferrer"><FaTwitter className="footerIcon text-primary" /></a>
        </div>
        </div>
    );
};

export default Footer;