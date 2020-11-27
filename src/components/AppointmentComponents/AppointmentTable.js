import React, { useContext, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { CalenderContext, DataContext } from '../../App';
import Preloader from '../Preloader/Preloader';
import AppointmentCard from './AppointmentCard';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement('#root')

const AppointmentTable = () => {
    const { register, handleSubmit, errors } = useForm();
    const contextData = useContext(CalenderContext);
    const contextData_2 = useContext(DataContext);

    const [selectAppointment, setSelectAppointment] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isBooked, setIsBooked] = useState(false);

    const date = `${contextData.date.getDate()}-${contextData.date.getMonth() + 1}-${contextData.date.getFullYear()}`;


    const onSubmit = (patientInfo) => {
        setIsBooked(true);
        const apId = selectAppointment.id;
        const time = selectAppointment.visitingHour;
        const dataToStore = { apId, date, time, patientInfo, status: "Pending" }
        fetch("https://cryptic-hollows-84804.herokuapp.com/makeBooking", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(dataToStore)
        })
            .then(res => res.json())
            .then(data => {
                const newAllBooking = [...contextData_2.allBookedAppointments];
                newAllBooking.push(data);
                contextData_2.setAllBookedAppointments(newAllBooking);
            })
            .catch(err => console.log(err))
    }


    const modalController = (apId) => {
        setModalIsOpen(true);
        const selectedAp = contextData_2.allAppointments.find(ap => ap.id === apId);
        if (selectedAp) {
            setSelectAppointment(selectedAp)
        }
    }


    return (
        <Container>
            <h1 className="text-brand text-center my-5">Available Appointments on {contextData.date.toLocaleString('default', { month: 'long' })} {contextData.date.getDate()}, {contextData.date.getFullYear()}</h1>
            <Row>
                {contextData_2.preLoaderVisibility && <Preloader />}
                {
                    contextData_2.allAppointments.map(singleAppointment => <AppointmentCard data={singleAppointment} modalController={modalController} key={singleAppointment.id} />)
                }
            </Row>

            {/* MODAL */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
            >
                {
                    isBooked ?
                        <div className="text-center p-5 m-5">
                            <FontAwesomeIcon className="text-success" style={{ fontSize: "5em" }} icon={faCheckCircle}></FontAwesomeIcon>
                            <h4 className="mt-5 lead">Appointment Request Sent!</h4>
                        </div>
                        :
                        selectAppointment &&
                        <div className="px-4">
                            <h2 className="text-brand text-center mt-4">{selectAppointment.subject}</h2>
                            <p className="text-center text-secondary mb-4">On {contextData.date.toLocaleString('default', { month: 'long' })} {contextData.date.getDate()}, {contextData.date.getFullYear()}</p>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-group">
                                    <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                                    {errors.name && <span className="text-danger">Name is required</span>}

                                </div>
                                <div className="form-group">
                                    <input type="number" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                                    {errors.phone && <span className="text-danger">Phone no is required</span>}
                                </div>
                                <div className="form-group">
                                    <input type="email" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                                    {errors.email && <span className="text-danger">E-mail is required</span>}
                                </div>
                                <div className="form-group row">
                                    <div className="col-4">

                                        <select className="form-control" name="gender" ref={register({ required: true })} >
                                            <option disabled={true} value="Not set">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Not set">Other</option>
                                        </select>
                                        {errors.gender && <span className="text-danger">Gender is required</span>}

                                    </div>
                                    <div className="col-4">
                                        <input ref={register({ required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                                        {errors.age && <span className="text-danger">Age required</span>}
                                    </div>
                                    <div className="col-4">
                                        <input ref={register({ required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                                        {errors.weight && <span className="text-danger">Weight is required</span>}
                                    </div>
                                </div>

                                <div className="form-group text-right">
                                    <button type="submit" className="gradient-btn py-2 px-4">SEND</button>
                                </div>

                            </form>
                        </div>
                }
            </Modal>
        </Container>
    );
};


const customStyles = {
    overlay: {
        backgroundColor: "rgba(130,125,125,0.75)"
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        borderRadius: '10px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
        transform: 'translate(-50%, -50%)'
    }
};

export default AppointmentTable;