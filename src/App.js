import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Appointment from './pages/Appointment';
import Dashboard from './pages/Dashboard/Dashboard';
import Patients from './pages/Dashboard/Patients';
import DashBoardAppointments from './pages/Dashboard/DashBoardAppointments';
import Prescriptions from './pages/Dashboard/Prescriptions';
import NotFound from './pages/NotFound';
import Login from './pages/Login/Login';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';

export const CalenderContext = createContext();
export const DataContext = createContext();
export const AdminContext = createContext();

function App() {

	const [date, setDate] = useState(new Date());
	const [allAppointments, setAllAppointments] = useState([]);
	const [allBookedAppointments, setAllBookedAppointments] = useState([]);
	const [allPatients, setAllPatients] = useState([]);
	const [preLoaderVisibility, setPreLoaderVisibility] = useState(true);
	const [loggedInUser, setLoggedInUser] = useState({});

	useEffect(() => {
		fetch("https://cryptic-hollows-84804.herokuapp.com/appointments")
			.then(res => res.json())
			.then(data => {
				setAllAppointments(data);
				setPreLoaderVisibility(false);
			})
	}, [allAppointments.length])

	useEffect(() => {
		fetch("https://cryptic-hollows-84804.herokuapp.com/bookedAppointments")
			.then(res => res.json())
			.then(data => setAllBookedAppointments(data));

		const uniquePatients = [];
		const map = new Map();
		if (allBookedAppointments.length) {
			for (const ap of allBookedAppointments) {
				if (!map.has(ap.patientInfo.phone)) {
					map.set(ap.patientInfo.phone, true);
					uniquePatients.push({
						name: ap.patientInfo.name,
						phone: ap.patientInfo.phone,
						email: ap.patientInfo.email,
						gender: ap.patientInfo.gender,
						age: ap.patientInfo.age,
						weight: ap.patientInfo.weight
					});
				}
			}
		}
		setAllPatients(uniquePatients);
	}, [allBookedAppointments.length])

	const calenderContextValue = { date, setDate };
	const contextData = { allAppointments, setAllAppointments, allBookedAppointments, setAllBookedAppointments, allPatients, preLoaderVisibility };

	return (
		<AdminContext.Provider value={[loggedInUser, setLoggedInUser]}>
			<DataContext.Provider value={contextData}>
				<CalenderContext.Provider value={calenderContextValue}>
					<Router>
						<Switch>

							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/appointment">
								<Appointment />
							</Route>

							<Route path="/login">
								<Login />
							</Route>

							<PrivateRoute path="/doctor/dashboard">
								<Dashboard loggedInUser={loggedInUser} />
							</PrivateRoute>
							<PrivateRoute path="/doctor/patients">
								<Patients loggedInUser={loggedInUser} />
							</PrivateRoute>
							<PrivateRoute path="/doctor/appointment">
								<DashBoardAppointments loggedInUser={loggedInUser}/>
							</PrivateRoute>
							<PrivateRoute path="/doctor/prescriptions">
								<Prescriptions loggedInUser={loggedInUser}/>
							</PrivateRoute>

							<Route path="*">
								<NotFound />
							</Route>

						</Switch>
					</Router>
				</CalenderContext.Provider>
			</DataContext.Provider>
		</AdminContext.Provider>
	);
}

export default App;
