import React from 'react';
import {
    FaFacebookF,
    FaTwitter,
    FaPinterest,
    FaInstagram
  } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-dark text-center  py-4">
            <h1 className="text-center">Shahriar Shubho</h1>
            <p className="container">Hi Thanks for visit my website. That's All of you need to know about me And You Can connect with me given the bellow social media website</p>
            <div>
            <FaFacebookF className="footerIcon" />
            <FaTwitter className="footerIcon" />
            <FaPinterest className="footerIcon" />
            <FaInstagram className="footerIcon" />
            </div>
        </div>
    );
};

export default Footer;