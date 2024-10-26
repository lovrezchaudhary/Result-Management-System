import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white py-4 mt-auto" style={{ backgroundColor: '#001F3F' }}>
      <Container>
        <Row>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h5>Result Management System</h5>
            <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            
          </Col>
          <Col md={4} className="text-center">
            <h5>Follow Us</h5>
            <div>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FaFacebookF />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
