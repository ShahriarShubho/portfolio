import React from 'react';
import AboutImg from '../../../images/remove-bg.png'

const About = () => {
    const contractData = [
        { id: 1, title: "Name:", text: "Shahriar Shubho" },
        { id: 2, title: "Email:", text: "shubha.shahriar@gmail.cpm" },
        { id: 3, title: "Phone:", text: "+8801817510325" },
        { id: 4, title: "Linkedin", text: "https://www.linkedin.com/in/shahriar-hoq-shubho-a869121b3/" },
      ]
    return (
        <div id="about" className="bg-dark">
            <h1 className="text-center py-5">About Me</h1>
            <div className="row">
                <div className="col-md-5">
                    <img className="img-fluid about-img" src={AboutImg} alt=""/>
                </div>
                <div className="col-md-7">
                    <h2>Hi There</h2>
                    <p>This Shahriar Shubho, You can call me Shubho, I,m a full-stack developer. Specially MERN Developer. What you know about me, I put the some answer below, You may like it. </p>
                    <div className='row'>
                        {contractData.map(data => (
                        <div className="col-md-6 col-sm-6">
                            <h3>{data.title}</h3>
                            <p>{data.text}</p>
                        </div>))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;