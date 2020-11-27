import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AdminContext } from '../../App';
import { Col, Container, Form, Row } from 'react-bootstrap';
import googleIcon from '../../images/google.png';
import fbIcon from '../../images/fb.png';
import loginBg from '../../images/loginBg.png'
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(AdminContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        photo: ''
    })

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const googleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch(error => {
                const newUserInfo = { ...user };
                newUserInfo.error = error.message;
                setUser(newUserInfo);
            });
    }


    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const fbSignIn = () => {
        firebase.auth().signInWithPopup(fbProvider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch(error => {
                const newUserInfo = { ...user };
                newUserInfo.error = error.message;
                setUser(newUserInfo);
            });
    }

    const handleSubmit = e => {
        if (newUser && user.name && user.email && user.password === user.confirmPassword) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = "";
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    updateUserName(user.name);
                    history.replace(from);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = "";
                    newUserInfo.name = res.user.displayName;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleBlur = e => {
        let isFieldValid = true;
        if (e.target.name === 'name') {
            isFieldValid = e.target.value.length > 3 && e.target.value.length < 20;
            document.getElementById('name').innerText = isFieldValid ? '' : 'Name must have atleast 3 characters';
        }
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            document.getElementById('email').innerText = isFieldValid ? '' : 'Enter a valid email address';
        }
        if (e.target.name === 'password') {
            const checkPasswordLength = e.target.value.length > 5 && e.target.value.length < 11;
            const isPasswordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordHasNumber && checkPasswordLength;
            document.getElementById('password').innerText = isFieldValid ? '' : 'Password must be contain 6-10 charactes with a number';
        }
        if (e.target.name === 'confirmPassword') {
            if (e.target.value !== user.password) {
                isFieldValid = false;
                document.getElementById('confirmPassword').innerText = "Password doesn't match";
            }
            else {
                document.getElementById('confirmPassword').innerText = "";
            }
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    };

    return (
        <Container>
            <Row className="align-items-center" style={{ minHeight: '100vh' }}>
                <Col lg={6} md={12} className='shadow-lg'>
                    <h3 className='text-center mt-4 text-secondary'>{newUser ? 'Create an account' : 'Login'}</h3>
                    <Form onSubmit={handleSubmit} className='pt-3 px-5'>
                        {newUser &&
                            <Form.Group>
                                <Form.Control onBlur={handleBlur} type='text' name="name" placeholder="Enter Your Name" />
                                <Form.Text className="text-danger" id="name"></Form.Text>
                            </Form.Group>
                        }
                        <Form.Group>
                            <Form.Control onBlur={handleBlur} type='email' name="email" placeholder="Enter Your E-mail" />
                            <Form.Text className="text-danger" id="email"></Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control onBlur={handleBlur} type='password' name="password" placeholder="Enter Your Password" />
                            <Form.Text className="text-danger" id="password"></Form.Text>
                        </Form.Group>
                        {newUser &&
                            <Form.Group>
                                <Form.Control onBlur={handleBlur} type='password' name="confirmPassword" placeholder="Confirm Password" />
                                <Form.Text className="text-danger" id="confirmPassword"></Form.Text>
                            </Form.Group>
                        }
                        <Form.Group>
                            <button type='submit' className='btn gradient-btn btn-block text-white'><b>{newUser ? 'Sign Up' : 'Sign In'}</b></button>
                        </Form.Group>
                        {newUser ?
                            <p className="text-center text-muted">Already have an account?
                                <span className="toggle-text" onClick={() => setNewUser(!newUser)}> Login</span>
                            </p> :
                            <p className="text-center text-muted">Don't have an account?
                                <span className="toggle-text" onClick={() => setNewUser(!newUser)}> Create an account</span>
                            </p>
                        }
                    </Form>

                    <p className="mt-2 px-2 text-center text-danger">{user.error}</p>

                    <div className="orSection mb-2">
                        <div></div>
                        <p className="text-dark my-0 mx-2">OR SIGN IN WITH</p>
                        <div></div>
                    </div>
                    <Form.Row className='px-5 pb-3'>
                        <Form.Group as={Col}>
                            <button onClick={googleSignIn} className="gradient-btn btn btn-block social-media-btn">
                                <img src={googleIcon} alt="" />
                                <span>GOOGLE</span>
                            </button>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <button onClick={fbSignIn} className="gradient-btn btn btn-block social-media-btn">
                                <img src={fbIcon} alt="" />
                                <span>FACEBOOK</span>
                            </button>
                        </Form.Group>
                    </Form.Row>
                </Col>

                <Col lg={6} className='d-none d-lg-block align-self-end'>
                    <img className='img-fluid pb-5' src={loginBg} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;