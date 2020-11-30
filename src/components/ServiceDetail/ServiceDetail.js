import React from 'react';
import { Col } from 'react-bootstrap';

const ServiceDetail = ({ service }) => {
    return (
        <Col md={4} className="text-center">
            <img className="h-25" src={service.img} alt=""/>
            <h5 className='my-3 text-brand'>{service.name}</h5>
            <p className="text-secondary">{service.description}</p>
        </Col>
    );
};

export default ServiceDetail;