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
                        <p className="text-secondary blockquote my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.</p>
                        <button className="gradient-btn py-3 px-4">Learn More</button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FeaturedService;