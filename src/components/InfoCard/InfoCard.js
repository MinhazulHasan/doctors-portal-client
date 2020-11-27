import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';

const InfoCard = ({ info }) => {
    return (
        <Col xm={4}>
            <div className={`d-flex card-${info.background} text-white info-container mb-5 align-items-center justify-content-center`}>
                <div className='mr-4'>
                    <FontAwesomeIcon className='info-icon' icon={info.icon}></FontAwesomeIcon>
                </div>
                <div className="d-none d-md-block">
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </Col>
    );
};

export default InfoCard;