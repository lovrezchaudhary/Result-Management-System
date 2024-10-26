import React, { useState } from 'react';
import { Tab, Tabs, Container, Form, Button, Alert, Row, Col, Card } from 'react-bootstrap';
import FileUpload from '../components/FileUpload';
import axios from 'axios';

function AdminDashboard() {
  const [key, setKey] = useState('attendance');
  const [studentId, setStudentId] = useState('');
  const [marks, setMarks] = useState(null);
  const [error, setError] = useState('');

  const fetchMarks = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/files/marks/${studentId}`);
      setMarks(response.data);
      setError('');
    } catch (err) {
      setMarks(null);
      setError(err.response?.data?.message || 'Error fetching marks');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="mb-4 text-center">
        <Col>
          <h2 className="text-primary">Admin Dashboard</h2>
          <p className="text-muted">
            Manage student records and upload marks across different categories.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center mb-4" >
        <Col md={8} >
          <Card className="p-3 shadow-sm" style={{ backgroundColor: 'rgba(240, 233, 133, 0.2)' }}>
            <h5 className="text-center text-secondary">Fetch Student Marks</h5>
            <Form inline className="d-flex justify-content-center">
              <Form.Control
                type="text"
                
                placeholder="Enter Student ID"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="rounded-left"
                style={{
                  width: '300px',
                  borderTopRightRadius: '0',
                  borderBottomRightRadius: '0',
                  backgroundColor: 'rgb(255, 253, 231,)',
                }}
              />
              <Button
                onClick={fetchMarks}
                variant="primary"
                className="rounded-right"
                style={{
                  borderTopLeftRadius: '0',
                  borderBottomLeftRadius: '0',
                }}
              >
                Fetch Marks
              </Button>
            </Form>
            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
            {marks && (
              <div className="mt-3">
                <h6>Marks for Student ID: <span className="text-primary">{studentId}</span></h6>
                <ul className="list-group">
                  {marks.map((mark, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                      <span>{mark.category}</span>
                      <span className="badge badge-primary badge-pill">{mark.marks}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="shadow-sm" style={{ backgroundColor: '#FFEEAD' }}>
            <Card.Body>
              <Tabs
                id="admin-dashboard-tabs"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 justify-content-center"
                
              >
                <Tab eventKey="attendance" title="Attendance Marks">
                  <Card className="mt-3 shadow-sm" style={{ backgroundColor: '#FFEAC5' }}>
                    <Card.Body>
                      <FileUpload category="Attendance Marks" />
                    </Card.Body>
                  </Card>
                </Tab>
                <Tab eventKey="projectReview" title="Project Review Marks">
                  <Card className="mt-3 shadow-sm" style={{ backgroundColor: '#FFEAC5' }}>
                    <Card.Body>
                      <FileUpload category="Project Review Marks" />
                    </Card.Body>
                  </Card>
                </Tab>
                <Tab eventKey="assessment" title="Assessment Marks">
                  <Card className="mt-3 shadow-sm" style={{ backgroundColor: '#FFEAC5' }}>
                    <Card.Body>
                      <FileUpload category="Assessment Marks" />
                    </Card.Body>
                  </Card>
                </Tab>
                <Tab eventKey="projectSubmission" title="Project Submission Marks">
                  <Card className="mt-3 shadow-sm" style={{ backgroundColor: '#FFEAC5' }}>
                    <Card.Body>
                      <FileUpload category="Project Submission Marks" />
                    </Card.Body>
                  </Card>
                </Tab>
                <Tab eventKey="linkedinPost" title="LinkedIn Post Marks">
                  <Card className="mt-3 shadow-sm" style={{ backgroundColor: '#FFEAC5' }}>
                    <Card.Body>
                      <FileUpload category="LinkedIn Post Marks" />
                    </Card.Body>
                  </Card>
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminDashboard;
