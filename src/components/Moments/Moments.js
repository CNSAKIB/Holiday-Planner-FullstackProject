import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/Moments/img1.jpg';
import img2 from '../../images/Moments/img2.jpg';
import img3 from '../../images/Moments/img3.jpg';
import img4 from '../../images/Moments/img4.jpg';
import img5 from '../../images/Moments/img5.jpg';
import './Moments.css'
const Moments = () => {
    return (
        <div id="moments" className="mt-4">
            <h1>Moments</h1>
            <p>This is some of the moments captured by our happy customers</p>
            <div className="w-75 mx-auto">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption className="text-light" >
                            <h3>Onto the Mountains</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                        />

                        <Carousel.Caption className="text-dark">
                            <h3>Beach Vibes</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Chilled as Himalaya</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img4}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Vintage Sunset</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img5}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Sea coming</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Moments;