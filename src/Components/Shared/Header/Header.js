import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import { GiMountaintop } from "react-icons/gi";
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
           <Navbar sticky="top" expand="lg" className='navbar ps-5'  style={{ backgroundColor:"#eee"}} >
           
                <Navbar.Brand as={Link} to='/home' className="fs-1 fw-bold" >
                <GiMountaintop className="text-success" style={{fontSize:"1.5em"}}/>
                     TOUR<span className="fw-bolder" style={{fontSize:"1.2em"}}>+</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{marginLeft:"25%"}}>
                        <Nav.Link as={HashLink} to="/home#home" className="fs-5 text-dark pe-3 nav-link">Home</Nav.Link>
                        
                        <Nav.Link as={HashLink} to="/home#tours" className="fs-5 text-dark pe-3 nav-link">Destination</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#photos" className="fs-5 text-dark pe-3 nav-link">Gallery</Nav.Link>
                        {user.email && <Nav.Link as={Link} to="/manageTour" className="fs-5 text-dark pe-3 nav-link">ManageTourPlans</Nav.Link>}

                        {user.email && <Nav.Link as={Link} to="/addTours" className="fs-5 text-dark pe-3 nav-link">AddTours</Nav.Link>}

                        {user.email && <Nav.Link as={Link} to="/myBookings" className="fs-5 text-dark pe-3 nav-link">MyBookings</Nav.Link>}
                      
                        {user.email ? 
                       
                       <Nav.Link as={Link} onClick={logOut} to="/contact" className="fs-5 fw-bold text-dark pe-3 nav-link">LogOut</Nav.Link> 
                       
                       :<Nav.Link as={Link} to="/contact" className="fs-5 fw-bold text-dark pe-3 nav-link">LogIn</Nav.Link> 
                        }
                        <Navbar.Text className="fs-5 text-dark pe-3 ">
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Nav>
                     
                </Navbar.Collapse>
           
        </Navbar>

        
        </>
    );
};

export default Header;