import React from 'react';
import AppointmentHeader from '../components/AppointmentComponents/AppointmentHeader';
import AppointmentTable from '../components/AppointmentComponents/AppointmentTable';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';

const Appointment = () => {
    return (
        <>
            <div className="appointment-header">
                <NavBar />
                <AppointmentHeader />
            </div>
            <AppointmentTable />
            <Footer />
        </>
    );
};

export default Appointment;