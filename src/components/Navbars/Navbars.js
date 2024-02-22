import React from "react";
import { Container } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

const Navbars = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary bg-dark" variant="secondary">
            <Container>
                <Navbar.Brand >Lazy & Suspense</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Navbars;