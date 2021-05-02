import React from 'react';
import {
    FaFacebookF,
    FaTwitter,
    FaPinterest,
    FaInstagram
  } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="container text-center">
            <h1 className="text-center mt-5">Shahriar Hoq Shubho</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nesciunt in reiciendis optio!</p>
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