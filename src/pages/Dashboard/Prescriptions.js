import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../../components/DashboardComponents/Sidebar';
import DataTable from '../../components/DataTables/DataTable';
import PrescriptionDataTable from '../../components/DataTables/PrescriptionDataTable';

const Prescriptions = ({ loggedInUser }) => {
    return (
        <Row className='container-fluid'>
            <Sidebar />
            <Col md={10} className='p-4 pr-5' style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <div className="d-flex justify-content-between mb-5">
                    <h4 className="text-brand"><b>Prescriptions</b></h4>
                    <div className="d-flex justify-content-between align-items-center">
                        <h4 className="text-capitalize"><b>{loggedInUser.name}</b></h4>
                        {loggedInUser.photo && <img className="avatar ml-5" src={loggedInUser.photo} alt="" />}
                    </div>
                </div>
                <DataTable tableName="All Prescriptions">
                    <PrescriptionDataTable />
                </DataTable>
            </Col>
        </Row>
    );
};

export default Prescriptions;