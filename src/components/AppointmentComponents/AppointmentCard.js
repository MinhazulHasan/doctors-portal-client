import React from 'react';
import { Card, Col } from 'react-bootstrap';

const AppointmentCard = (props) => {
    return (
        <Col lg={4} md={6} sm={12} className="mb-5">
            <Card className="appointment-card p-3">
                <Card.Body className="text-center">
                    <Card.Title className="text-brand">{props.data.subject}</Card.Title>
                    <h6>{props.data.visitingHour}</h6>
                    <p className='text-muted'>{props.data.totalSpace} SPACES AVAILABLE</p>
                    <button onClick={() => props.modalController(props.data.id)} className="gradient-btn py-2 px-4 text-uppercase">Book appointment</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AppointmentCard;