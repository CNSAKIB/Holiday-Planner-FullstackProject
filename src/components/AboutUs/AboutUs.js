import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div id="about" className="mt-4">
            <h1 className="mb-3">Why us?</h1>
            <Row xs={1} md={3} className="w-75 mx-auto g-4" >
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><i class="fas fa-shield-alt"></i></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Customer Security</Card.Subtitle> <br />
                            <Card.Text>
                                Travelling to an unknown place might be not easy for someone as there are many security issues in an unknown place.But with us,it's not a fact at all because we provide you the highest possible security if you travel via us.We have our special security force.So, you don't have to bother and you can enjoy your tour.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><i class="fas fa-hiking"></i></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Trained Experienced Guide</Card.Subtitle> <br />
                            <Card.Text>
                                We have special trained experienced guide, who will guid you towards your destination.In this case, we hire the local people so that you can get highest service as possible.Our guide is ready for any kind of situation,doesn't matter if it's tough or not.So,youcan enjoy your tour without bothering.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><i class="fas fa-handshake"></i></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Refund Policy</Card.Subtitle> <br />
                            <Card.Text>
                                We have the best refund policy compared to others.We provide you even upto 100% refund at the last moment cancelling.(5 hours before).Following this, we have 50%,20% refund on the cancellation before the journey starts.So, if theres any last moment rush you can easily concel your booking.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>


        </div>
    );
};

export default AboutUs;