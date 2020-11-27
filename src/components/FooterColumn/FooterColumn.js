import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterColumn = (props) => {
    return (
        <Col lg={3} md={6} sm={12}>
            <h5 className='text-title'>{props.menuTitle ? props.menuTitle : '.'}</h5>
            <ul className="mt-4 list-unstyled">
                {
                    props.menuItems.map( (item, index) => (
                        <li key={index}>
                            <Link to={item.link} className="text-secondary">{item.name}</Link>
                        </li>
                    ))
                }
                {props.children && props.children}
            </ul>
        </Col>
    );
};

export default FooterColumn;