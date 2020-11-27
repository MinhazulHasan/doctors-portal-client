import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import doctor from '../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <div className="make-appointment">
            <Container>
                <Row>
                    <Col md={5} className='d-none d-lg-block'>
                        <img className="img-fluid" src={doctor} alt=""/>
                    </Col>
                    <Col md={7}>
                        <h5 className="mt-4 text-title">APPOINTMENT</h5>
                        <h2 className="mt-4 text-white">Make an Appointment <br/> Today</h2>
                        <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                        <button className="gradient-btn py-2 px-4">Learn More</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MakeAppointment;