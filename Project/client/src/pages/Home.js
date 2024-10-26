import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5 text-center">
        <Container>
          <h1 className="fw-bold">Welcome to the Result Management System</h1>
          <p >Efficiently manage and view student results in a single platform.</p>
          <Button variant="outline-light" as={Link} to="/admin" className="m-2">
            Go to Admin Dashboard
          </Button>
          <Button variant="outline-light" as={Link} to="/student" className="m-2">
            Go to Student Portal
          </Button>
        </Container>
      </section>

      {/* About Section */}
      <section className="about-section">
        <img
          src="/ResultImg.jpeg"
          alt="Result Management"
          className="w-100"
          style={{ maxHeight: '500px', objectFit: 'cover' }}
        />
      </section>

      {/* Features Section */}
      <section className="bg-primary py-5">
        <Container>
          <h2 className="text-center mb-4">Features</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm" style={{ backgroundColor: '#4CC9FE' }}>
                <Card.Body >
                  <Card.Title>Admin Dashboard</Card.Title>
                  <Card.Text>
                    An intuitive dashboard for administrators to manage and upload student results.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm"  style={{ backgroundColor: '#4CC9FE' }}>
                <Card.Body>
                  <Card.Title>Secure Student Portal</Card.Title>
                  <Card.Text>
                    A secure and private portal where students can access their results with ease.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm" style={{ backgroundColor: '#4CC9FE' }}>
                <Card.Body>
                  <Card.Title>Excel File Upload</Card.Title>
                  <Card.Text>
                    Simple file upload for batch updates, making it easy to manage large numbers of students.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
