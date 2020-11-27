import React from 'react';
import { Col, Row } from 'react-bootstrap';
import chair from '../../images/chair.png';
import ReactCalender from './Calender';
import './Appointment.css';

const AppointmentHeader = () => {
    return (
        <>
        <Row style={{ height: '600px' }} className="d-flex align-items-center appointment-header">
            <Col md={{ span: 4, offset: 1 }}>
                <h1 className="text-heading text-center mb-4">Appointment</h1>
                <ReactCalender />
            </Col>
            <Col md={{ span: 5, offset: 1 }} className="d-none d-md-block">
                <img className="img-fluid ml-5" src={chair} alt=""/>
            </Col>
        </Row>
        </>
    );
};

export default AppointmentHeader;