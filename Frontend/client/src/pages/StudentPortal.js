// client/src/pages/StudentPortal.js
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';

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
    <Container className="mt-5">
      <h2>Student Portal</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="studentId">
          <Form.Label>Enter Your Unique ID</Form.Label>
          <Form.Control 
            type="text" 
            value={studentId} 
            onChange={(e) => setStudentId(e.target.value)} 
            required 
          />
        </Form.Group>
        <Button variant="primary" type="submit">Get Results</Button>
      </Form>
      {message && <Alert variant="danger" className="mt-3">{message}</Alert>}
      {marks.length > 0 && (
        <div className="mt-4">
          <h4>Your Marks:</h4>
          <ul>
            {marks.map((mark, index) => (
              <li key={index}>
                {mark.category}: {mark.marks}
              </li>
            ))}
          </ul>
          <h5>Total Marks: {totalMarks}</h5>
        </div>
      )}
    </Container>
  );
}

export default StudentPortal;
