import React from 'react';
import './NextTrip.css'
import { Col, Container, Row } from 'react-bootstrap';



const NextTrip = () => {
    return (
        <div>
            <Container>
                <h3>Inspiration For Next Trip</h3>
                <div className="trip">
                    <Row>
                        <Col>
                            <figure className="position-realtive">
                                <img src="https://tse1.mm.bing.net/th?id=OIP.yXehg0FAAEmqujh4nB9JIQHaE7&pid=Api&rs=1&c=1&qlt=95&w=182&h=121" alt="" className="img-fluid" />
                                <>
                                    <figcaption>
                                        <h5>RUSSIAN TOURIST PLACE</h5>
                                        <p>
                                            The mosque is locally known as the 'Shat Gombuj Masjid', which in Bengali means Sixty Domed Mosque
                                        </p>
                                    </figcaption>
                                </>
                            </figure>
                        </Col>
                        <Col>
                            <figure className="">
                                <img src="https://militaryingermany.com/wp-content/uploads/2014/06/shutterstock_171418343-580x391.jpg" alt="" className="" />
                                <>
                                    <figcaption className="trip-content">
                                        <h5>GERMAN TOURIST PLACE</h5>
                                        <p>
                                            Ahsan Manzil, an architectural treasure, is a witness to many historical events of Bangladesh.
                                        </p>
                                    </figcaption>
                                </>
                            </figure>
                        </Col>
                        <Col>
                            <figure className="">
                                <img src="https://tse1.mm.bing.net/th?id=OIP.66sEb5xdj-dhWMqV1BRpjAHaEo&pid=Api&rs=1&c=1&qlt=95&w=160&h=100" alt="" className="" />
                                <>
                                    <figcaption>
                                        <h5>BRITISH TOURIST PLACE</h5>
                                        <p>
                                            Kantanagar Temple, commonly known as Kantaji Temple at Kantanagar,is a late-medieval Hindu temple in Dinajpur, Bangladesh.
                                        </p>
                                    </figcaption>
                                </>
                            </figure>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default NextTrip;