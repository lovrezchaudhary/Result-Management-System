import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert, Card, Row, Col } from 'react-bootstrap';

function StudentPortal() {
  const [studentId, setStudentId] = useState('');
  const [marks, setMarks] = useState([]);
  const [totalMarks, setTotalMarks] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/api/results/${studentId}`);
      setMarks(response.data);
      const total = response.data.reduce((acc, record) => acc + record.marks, 0);
      setTotalMarks(total);
      setMessage('');
    } catch (error) {
      setMessage('Error fetching results');
      console.error(error);
    }
  };

  return (
    <Container className="mt-5" style={{ minHeight: '500px' }}>
      <Row className="mb-4">
        <Col className="text-center">
          <h2>Student Portal</h2>
          <p className="text-muted">
            Welcome to the Student Portal! Enter your unique student ID below to access your academic results and check your total marks.
          </p>
        </Col>
      </Row>

      <Container className="d-flex justify-content-center align-items-center" >
      <Card className="p-4 mb-2 border-0 shadow-md" style={{ backgroundColor: '#FFFECB', width: '100%', maxWidth: '600px' }}>
        <Card.Body>
          <Form onSubmit={handleSubmit} className="d-flex align-items-center">
            <Form.Group controlId="studentId" className="flex-grow-1 mb-0">
              <Form.Control 
                type="text" 
                value={studentId} 
                onChange={(e) => setStudentId(e.target.value)} 
                required 
                placeholder="Enter Your Unique ID" 
                style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }}
              />
            </Form.Group>
            <Button 
              variant="primary" 
              type="submit" 
              style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0', whiteSpace: 'nowrap' }}
            >
              Get Results
            </Button>
          </Form>
          {message && <Alert variant="danger" className="mt-3">{message}</Alert>}
        </Card.Body>
      </Card>
    </Container>

      {marks.length > 0 && (
        <Card className="p-4 mb-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <h4>Your Marks:</h4>
          <ul className="list-group mb-3">
            {marks.map((mark, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {mark.category}
                <span className="badge badge-primary badge-pill">{mark.marks}</span>
              </li>
            ))}
          </ul>
          <h5 className="text-primary">Total Marks: {totalMarks}</h5>
        </Card>
      )}

      <Row className="text-center mt-5">
        <Col>
          <p className="text-muted">
            For any issues with accessing your results, please contact the administration office or reach out to support via email at <a href="mailto:support@university.com">support@university.com</a>.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default StudentPortal;
