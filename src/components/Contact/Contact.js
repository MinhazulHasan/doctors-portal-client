import React from 'react';
import { Container, Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact mt-5 py-5" id='contact'>
            <Container>
                <div className="text-center">
                    <h5 className='text-title'>CONTACT US</h5>
                    <h1>Always Connect With Us</h1>
                </div>
                <div className="col-md-9 mx-auto mt-5">
                    <Form action="https://formspree.io/f/xzbkazjj" method="POST" target='_blank'>
                        <Form.Group>
                            <Form.Control type="text" name="email" placeholder="Email Address *" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" name="subject" placeholder="Subject *" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="textarea" rows='7' name="message" placeholder="Message *" />
                        </Form.Group>
                        <Form.Group className="text-center">
                            <button type="submit" className="gradient-btn py-3 px-5">SUBMIT</button>
                        </Form.Group>
                    </Form>
                </div>
            </Container>
        </section>
    );
};

export default Contact;