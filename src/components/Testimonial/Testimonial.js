import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Testimonial = (props) => {
    const { name,from ,img } = props.testimonial;
    return (
        <Col lg={4} md={6} className='my-5'>
            <Card style={{ width: '20rem' }}  className='testimonial-card'>
                <Card.Body>
                    <Card.Text className='text-secondary'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content</Card.Text>
                </Card.Body>
                <div className="d-flex my-4 align-items-center">
                    <img className="ml-4 mr-3" src={img} alt="" width="60"/>
                    <div>
                        <h5 className='text-title'>{name}</h5>
                        <p className="m-0 text-gray">{from}</p>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default Testimonial;