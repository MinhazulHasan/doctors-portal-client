import React from 'react';
import Blogs from '../components/Blogs/Blogs';
import Contact from '../components/Contact/Contact';
import Doctors from '../components/Doctors/Doctors';
import FeaturedService from '../components/FeaturedService/FeaturedService';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import MakeAppointment from '../components/MakeAppointment/MakeAppointment';
import Services from '../components/Services/Services';
import Testimonials from '../components/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <FeaturedService/>
            <MakeAppointment/>
            <Testimonials/>
            <Blogs/>
            <Doctors/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;