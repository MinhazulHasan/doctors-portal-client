import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import featured from '../../images/featured.png';

const FeaturedService = () => {
    return (
        <section>
            <Container>
                <Row className="mb-5 py-5">
                    <Col md={5} className='m-md-0'>
                        <img className="img-fluid img-thumbnail" src={featured} alt=""/>
                    </Col>
                    <Col md={7} className="align-self-center">
                        <h1 className="text-heading">Exceptional Dental Care, on your Term</h1>
                        <p className="text-secondary blockquote my-4 text-justify">Good oral/dental health translates to good health overall. Dental problems such as cavities or gum disease can impair your ability to eat and speak properly, cause pain and bad breath. And what many people may not realize, is that poor dental health can have a profoundly, negative affect on areas outside of the mouth, including your heart, diabetes, pregnancy and chronic inflammation, such as arthritis — to name a few. Practicing good dental hygiene is so important, because it can prevent these type of oral disease and dental problems. And prevention should be the primary focus.</p>
                        <button className="gradient-btn py-3 px-4">Learn More</button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FeaturedService;