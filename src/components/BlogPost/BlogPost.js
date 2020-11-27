import React from 'react';
import { Card, Col } from 'react-bootstrap';

const BlogPost = (props) => {
    const { title, author, authorImg, date } = props.blog;
    return (
        <Col lg={4} md={6} sm={12}>
        <Card className="blog-card my-5">
            <Card.Header className="d-flex align-items-center card-header mt-3">
                <img className="mx-3" src={authorImg} alt="" width="60" />
                <div>
                    <h6 className='text-title'>{author}</h6>
                    <p className="m-0 text-gray">{date}</p>
                </div>
            </Card.Header>
            <Card.Body className='blog-card-body'>
                <Card.Title>{title}</Card.Title>
                <Card.Text className='mt-4 text-muted'>It is a long established fact that by the readable content of a lot layout. The point is this is not so easy to do. I wish I may expert soon.</Card.Text>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default BlogPost;