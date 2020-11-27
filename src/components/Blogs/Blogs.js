import React from 'react';
import { CardDeck, Container } from 'react-bootstrap';
import wilson from '../../images/wilson.png';
import BlogPost from '../BlogPost/BlogPost';
import './Blogs.css';

const blogData = [
    {
        title : 'Check at least a doctor in a year for your teeth',
        author:'Dr. Rashed Kabir',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'Two time brush in a day can keep you healthy',
        author:'Dr. Cudi',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'The tooth cancer is taking a challenge',
        author:'Dr. John Mitchel',
        authorImg : wilson,
        date : '23 April 2019'
    },
]

const Blogs = () => {
    return (
        <Container className="my-5 blog" id="blog">
            <div className="text-center">
                <h5 className='text-title'>OUR BLOG</h5>
                <h1 className="text-heading">From Our Blog News</h1>
            </div>
            <CardDeck className='mt-5'>
                {blogData.map(blog => <BlogPost blog={blog} key={blog.title}></BlogPost>)}
            </CardDeck>
        </Container>
    );
};

export default Blogs;