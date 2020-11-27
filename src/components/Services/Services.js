import React from 'react';
import fluoride from '../../images/fluoride.png';
import cavity from '../../images/cavity.png';
import whitening from '../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { Row } from 'react-bootstrap';

const services = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teath Whitening',
        img: whitening
    }
];

const Services = () => {
    return (
        <section className="services-container my-5 pt-5">
            <div className="text-center mt-5">
                <h5 className="text-brand"><strong>OUR SERVICES</strong></h5>
                <h1 className="text-heading">Services We Provide</h1>
            </div>
            <div className="d-flex justify-content-center">
                <Row className="w-75 mt-5 pt-5">
                    {services.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)}
                </Row>
            </div>
        </section>
    );
};

export default Services;