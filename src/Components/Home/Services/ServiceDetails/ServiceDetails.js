import React from 'react';

const ServiceDetails = ({services}) => {
    const {icon, heading} = services
    return (
        <div className="col-md-4">
            <div className="bordered shadow-lg p-3 mb-3 serviceCard">
            <div>
                <div>
                    <h2>{icon}</h2>
                </div>
                <div>
                    <h5>{heading}</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, odit.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ServiceDetails;