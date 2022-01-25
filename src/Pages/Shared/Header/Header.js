import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Tourism Discuss</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/login">
                    <Button variant="primary">Log in</Button></Nav.Link>   
                    
                   
                     {
                     user?.email ?
                     <Nav.Link  className="justify-content-end" as={Link} to="/login"><Button variant="primary">Log in</Button></Nav.Link> 
                     :
                        
                    <div className="dropwdown-menu" >
                        <Button onClick={logOut} variant="primary">Log out</Button>
                    </div> 
                    }

                                       
                    <Navbar.Text>
                        { !user.email ?
                        
                        <div>
                             <NavDropdown className="dropwdown-menu" title="Offers" id="collasible-nav-dropdown">
                            
                            <NavDropdown.Item as={Link} to="/manageServices">Manage Services</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/addservice">Add a Service</NavDropdown.Item>
                            </NavDropdown>
                            <div>Signed in as : <a href="#login">{user.displayName}</a></div>
                        </div> 
                        :
                        <div><h4> </h4></div>
                        
                        } 
                            
                             
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;

