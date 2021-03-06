import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import InfoCard from '../InfoCard/InfoCard';

const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit our location',
        description: 'Rangpur, Bangladesh',
        icon: faMapMarkerAlt,
        background: 'dark'
    },
    {
        title: 'Contact us now',
        description: '+88 01723 183898',
        icon: faPhoneAlt,
        background: 'primary'
    }
];

const BusinessInfo = () => {
    return (
        <Container>
            <Row>
                {
                    infosData.map(info => <InfoCard info={info} key={info.title}></InfoCard>)
                }
            </Row>
        </Container>
    );
};

export default BusinessInfo;