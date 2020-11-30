import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import chair from '../../images/chair.png';

const Banner = () => {
    const history = useHistory();
    return (
        <Container>
        <Row style={{height: '600px'}}  className='d-flex align-items-center'>
            <Col md={{ span: 5 }} sm={12}>
                <h1 className='text-heading'>Your New Smile<br/>Starts Here</h1>
                <p className='text-secondary my-4'>Smiling not only offers a mood boost but helps our bodies release cortisol and endorphins that provide numerous health benefits, including: Reduced blood pressure. So make yourself smile again!</p>
                <button onClick={() => history.push('/appointment')} className='gradient-btn p-3'>GET APPOINTMENT</button>
            </Col>
            <Col md={{ span: 6, offset: 1 }}  className='d-none d-md-block'>
                <img className="img-fluid" src={chair} alt=""/>
            </Col>
        </Row>
        </Container>
    );
};

export default Banner;