// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import StudentPortal from './pages/StudentPortal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/student" element={<StudentPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
