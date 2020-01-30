import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText
  } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    state = {
        isOpen: false
    }

    toggle = () => {

    }

    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Arithmetic App</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/" className="nav-link">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/history" className="nav-link">History</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about" className="nav-link">About</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/gallery" className="nav-link">Gallery</Link>
                        </NavItem>                                                
                    </Nav>
                    <NavbarText>Logout</NavbarText>
                </Collapse>
            </Navbar>
        )
    }
}

export default Header;