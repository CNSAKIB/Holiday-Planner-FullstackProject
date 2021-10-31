import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { _id, name, img, details, price } = props.service;
    return (

        <Col>
            <Card data-aos="flip-left" className="single-card" style={{ width: '18rem' }}>
                <Card.Img variant="top" className="img-container" src={img} />
                <Card.Body className="text-center">
                    <Card.Title className="fw-bold" >{name}</Card.Title>
                    <Card.Text>
                        <p>Price: &#2547;{price}</p>
                        {details}
                        <br />
                        <Link to={`/details/${_id}`}> <Button className="mt-4 common-button">Book Now <i className="fas fa-arrow-circle-right"></i></Button></Link>
                    </Card.Text>
                </Card.Body>
            </Card>

        </Col>

    );
};

export default Service;