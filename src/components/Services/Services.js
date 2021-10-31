import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://bloodcurdling-mansion-90066.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [services]);
    return (
        <div id="services">
            <h1 className="mt-4 mb-2 fw-bold">Our Services</h1>
            <Row xs={1} md={3} className="w-75 mx-auto mt-2 mb-4 pb-5 g-4">

                {services.map(service => <Service
                    key={service._id}
                    service={service}
                ></Service>)}

            </Row>

        </div>
    );
};

export default Services;