import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Testimonials.css';
import wilson from '../../images/wilson.png';
import ema from '../../images/ema.png';
import aliza from '../../images/aliza.png';
import Testimonial from '../Testimonial/Testimonial';

const testimonialData = [
    {
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]

const Testimonials = () => {
    return (
        <section className="my-5 py-5">
            <Container>
                <div className="testimonials-header">
                    <h5 className="text-title">TESTIMONIAL</h5>
                    <h1 className="text-heading">What's Our Patients <br /> Says </h1>
                </div>
                <Row className="mt-5">
                    {testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}></Testimonial>)}
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;