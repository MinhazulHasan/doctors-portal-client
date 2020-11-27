import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ReactCalender from '../../components/AppointmentComponents/Calender';
import Sidebar from '../../components/DashboardComponents/Sidebar';
import DayAppointmentDataTable from '../../components/DataTables/DayAppointmentDataTable';

const DashBoardAppointments = ({ loggedInUser }) => {
    return (
        <Row className='container-fluid'>
            <Sidebar />
            <Col md={10} className='p-4 pr-5' style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <div className="d-flex justify-content-between mb-5">
                    <h4 className="text-brand"><b>Appointments</b></h4>
                    <div className="d-flex justify-content-between align-items-center">
                        <h4 className="text-capitalize"><b>{loggedInUser.name}</b></h4>
                        {loggedInUser.photo && <img className="avatar ml-5" src={loggedInUser.photo} alt="" />}
                    </div>
                </div>
                <Row>
                    <Col md={6}>
                        <ReactCalender />
                    </Col>
                    <Col md={6}>
                        <DayAppointmentDataTable />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default DashBoardAppointments;