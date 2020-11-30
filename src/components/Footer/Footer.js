import React from 'react';
import { Row } from 'react-bootstrap';
import FooterColumn from '../FooterColumn/FooterColumn';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {

    const noNamed = [
        { name: "Emergency Dental Care", link: "#" },
        { name: "Check Up", link: "#" },
        { name: "Treatment of Personal Diseases", link: "#" },
        { name: "Tooth Extraction", link: "#" },
        { name: "Check Up", link: "#" },
    ]
    const ourAddress = [
        { name: "Dorsona - Rangpur", link: "#" },
        { name: "Bangladesh", link: "#" },

    ]
    const oralHealth = [
        { name: "Emergency Dental Care", link: "#" },
        { name: "Check Up", link: "#" },
        { name: "Treatment of Personal Diseases", link: "#" },
        { name: "Tooth Extraction", link: "#" },
        { name: "Check Up", link: "#" },
        { name: "Check Up", link: "#" },
        { name: "Check Up", link: "#" }
    ]
    const services = [
        { name: "Emergency Dental Care", link: "#" },
        { name: "Check Up", link: "#" },
        { name: "Treatment of Personal Diseases", link: "#" },
        { name: "Tooth Extraction", link: "#" },
        { name: "Check Up", link: "#" },
        { name: "Check Up", link: "#" },
        { name: "Check Up", link: "#" }
    ]

    return (
        <footer className='footer-area'>
            <div className='pt-5 px-5'>
                <Row className="py-5">
                    <FooterColumn key={1} menuTitle={""} menuItems={noNamed}></FooterColumn>
                    <FooterColumn key={2} menuTitle={"Services"} menuItems={services}></FooterColumn>
                    <FooterColumn key={3} menuTitle={"Oral Health"} menuItems={oralHealth}></FooterColumn>
                    <FooterColumn key={4} menuTitle={"Our Address"} menuItems={ourAddress}>
                        <ul className="social-media list-inline mt-3">
                            <li className="list-inline-item"><Link to="//facebook.com" target="_blank"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></Link></li>
                            <li className="list-inline-item"><Link to="//google.com" target="_blank"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></Link></li>
                            <li className="list-inline-item"><Link to="//instagram.com" target="_blank"><FontAwesomeIcon className="icon" icon={faInstagram} /></Link></li>
                        </ul>
                        <div className="mt-4">
                            <h6 className="text-secondary">Call now</h6>
                            <button className="gradient-btn p-3">+2025550295</button>
                        </div>
                    </FooterColumn>
                </Row>
                <div className="text-center blockquote text-gray">
                    <p>Copyright {(new Date()).getFullYear()} , Minhazul Hasan Sohan ; All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;