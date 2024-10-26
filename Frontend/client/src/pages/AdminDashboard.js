import React, { useState } from 'react';
import { Tab, Tabs, Container, Form, Button, Alert } from 'react-bootstrap';
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
      <h2>Admin Dashboard</h2>
      <Form inline className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <Button onClick={fetchMarks} variant="primary" className="ml-2">Fetch Marks</Button>
      </Form>
      {error && <Alert variant="danger">{error}</Alert>}
      {marks && (
        <div className="mt-3">
          <h5>Marks for Student ID: {studentId}</h5>
          <ul>
            {marks.map((mark, index) => (
              <li key={index}>{mark.category}: {mark.marks}</li>
            ))}
          </ul>
        </div>
      )}
      <Tabs
        id="admin-dashboard-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="attendance" title="Attendance Marks">
          <FileUpload category="Attendance Marks" />
        </Tab>
        <Tab eventKey="projectReview" title="Project Review Marks">
          <FileUpload category="Project Review Marks" />
        </Tab>
        <Tab eventKey="assessment" title="Assessment Marks">
          <FileUpload category="Assessment Marks" />
        </Tab>
        <Tab eventKey="projectSubmission" title="Project Submission Marks">
          <FileUpload category="Project Submission Marks" />
        </Tab>
        <Tab eventKey="linkedinPost" title="LinkedIn Post Marks">
          <FileUpload category="LinkedIn Post Marks" />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default AdminDashboard;
