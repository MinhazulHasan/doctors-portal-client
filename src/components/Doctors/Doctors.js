import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from './Doctor';

const doctors = [
    {
        _id : 1,
        name: 'Dr. Coudi',
    },
    {
        _id : 2,
        name: 'Dr. Coudi',
    },
    {
        _id : 3,
        name: 'Dr. Coudi',
    }
];

const Doctors = () => {

    return (
        <Container className="text-center my-5">
            <h5 className='text-title'>OUR DOCTORS</h5>
            <Row className='my-5'>
                {
                    doctors.map(doctor => <Doctor key={doctor._id} doctor={doctor} />)
                }
            </Row>
        </Container>
    );
};

export default Doctors;