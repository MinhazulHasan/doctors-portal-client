import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AdminContext } from '../../App';

const NavBar = () => {
    const location = useLocation();
    const condition = location.pathname === '/';
    const [loggedInUser, setLoggedInUser] = useContext(AdminContext);
    const history = useHistory();

    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to="/" className='nav-text text-dark'>Doctor's <strong>Portal</strong></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto d-flex align-items-center">
                        <Nav.Link>
                            {loggedInUser.photo && <img className="avatar ml-5" src={loggedInUser.photo} alt="" />}
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='mx-2 nav-text text-dark' to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link href="#contact" className='mx-2 text-dark'>Contact Us</Nav.Link>
                        <Nav.Link>
                            <Link className={`mx-2 ${condition ? 'text-white' : 'text-dark'} nav-text`} id='collapse-dark' to="/doctor/dashboard">Doctors Dashboard</Link>
                        </Nav.Link>
                        <Nav.Link href="#blog" className={`mx-2 ${condition ? 'text-white' : 'text-dark'}`} id='collapse-dark'>Blog</Nav.Link>
                        {(loggedInUser.email) ?
                            <button onClick={() => setLoggedInUser({})} className='gradient-btn py-2 px-4 ml-2 mt-2'>Log Out</button>
                            :
                            <button onClick={() => history.push('/login')} className='gradient-btn py-2 px-4 ml-2 mt-2'>Log In</button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;