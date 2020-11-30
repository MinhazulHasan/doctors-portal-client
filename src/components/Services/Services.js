import React from 'react';
import fluoride from '../../images/fluoride.png';
import cavity from '../../images/cavity.png';
import whitening from '../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { Row } from 'react-bootstrap';

const services = [
    {
        name: 'Fluoride Treatment',
        img: fluoride,
        description: 'Fluoride is a natural mineral that builds strong teeth and prevents cavities. It’s been an essential oral health treatment for decades. Fluoride supports healthy tooth enamel and fights the bacteria that harm teeth and gums.'
    },
    {
        name: 'Cavity Filling',
        img: cavity,
        description: 'To treat a cavity your dentist will remove the decayed portion of the tooth and then "fill" the area on the tooth where the decayed material once lived.Fillings are also used to repair cracked or broken teeth and teeth that have been worn down from misuse.'
    },
    {
        name: 'Teath Whitening',
        img: whitening,
        description: 'Tooth whitening can be a very effective way of lightening the natural colour of your teeth without removing any of the tooth surface. It cannot make a complete colour change, but it may lighten the existing shade.'
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