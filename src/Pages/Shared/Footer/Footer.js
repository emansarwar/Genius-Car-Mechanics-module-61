import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div>
                <div>
                    <Container className="footer">
                        <hr />
                        <p>Travele, Inc. is not responsible for content on external Web sites</p>
                        <p>© 2021 Travele, Inc., an Travele Group company. All rights reserved. Expedia and the Airplane Logo are trademarks or registered trademarks of Travele, Inc. CST# 2029030-50.</p>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Footer;