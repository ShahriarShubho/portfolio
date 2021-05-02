import React from 'react';

const ServiceDetails = ({services}) => {
    const {icon, heading, description} = services
    return (
        <div className="col-md-4">
            <div className="bordered shadow-lg p-3 mb-3 serviceCard">
            <div>
                <div>
                    <h2>{icon}</h2>
                </div>
                <div>
                    <h5>{heading}</h5>
                    <p>{description}</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ServiceDetails;