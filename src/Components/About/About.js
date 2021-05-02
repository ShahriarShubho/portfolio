import React from 'react';
import AboutImg from '../../images/remove-bg.png'

const About = () => {
    const contractData = [
        { id: 1, title: "Name:", text: "Jonathan Doe" },
        { id: 2, title: "Email:", text: "example@domain.com" },
        { id: 3, title: "Phone:", text: "+1 023 454 345" },
        { id: 4, title: "Linkedin", text: "Jonathan_123" },
      ]
    return (
        <div className="bg-dark">
            <h1 className="text-center my-5">About Me</h1>
            <div className="row">
                <div className="col-md-5">
                    <img className="img-fluid" src={AboutImg} alt=""/>
                </div>
                <div className="col-md-7">
                    <h2>Hi There</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorem, nihil voluptate nobis optio tempora veniam tempore saepe iusto temporibus? Alias quo ratione magnam inventore.</p>
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