import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

import './Banner.css'

const Banner = () => {
    return (
        <div className="text-white Header-container text-center mt-3">
            <Container fluid>
                <Row>
                    <Col xs={12} md={6} className="mt-5 pt-5 pe-5">
                        <h1 className="header-text mt-5 pt-4" ><span className="text-bold">Welcome!</span><br />
                            to Holiday-Planner<br />
                            Choose your fav plan from our best packages!
                        </h1> <br />
                        <h4>Guids you towards a better vacation!</h4>
                        <br />
                        <HashLink to="/home#services" ><button className="btn-regular">See more <i className="fas fa-arrow-circle-right"></i></button></HashLink>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;