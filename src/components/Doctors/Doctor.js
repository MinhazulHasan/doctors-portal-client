import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import doctorImg from '../../images/doctor-sm.png';

const Doctor = ({ doctor }) => {
    return (
        <Col md={4} sm={6}>
            <img alt='' className='img-fluid mb-3' src={doctorImg} />
            <h4>{doctor.name}</h4>
            <p className='text-gray'><FontAwesomeIcon className="text-primary" icon={faPhoneAlt} /> +880-188-934789</p>
        </Col>
    );
};

export default Doctor;
