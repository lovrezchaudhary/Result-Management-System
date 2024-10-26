const mongoose = require('mongoose');
const StudentMark = require('./models/StudentMark'); // Adjust the path if needed

mongoose.connect('mongodb://localhost:27017/result-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  const students = [
    { studentId: "S001", category: "Attendance Marks", marks: 85 },
    { studentId: "S001", category: "Project Review Marks", marks: 90 },
    { studentId: "S002", category: "Attendance Marks", marks: 75 },
    { studentId: "S002", category: "Project Review Marks", marks: 80 },
    { studentId: "S003", category: "Assessment Marks", marks: 95 }
  ];

  await StudentMark.insertMany(students);
  console.log("Sample student marks inserted.");
  mongoose.disconnect();
})
.catch(err => console.error(err));
